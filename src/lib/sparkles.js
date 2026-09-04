// Geometry sampling for the sparkle transitions.
//
// The dissolve/materialise effect looks magical only if the sparkles leave from
// (and arrive at) the actual letterforms on screen, so we rasterise each marked
// element into an offscreen canvas and harvest its opaque pixels.
//
// All points are returned in viewport coordinates, measured from the *layout*
// box (see layoutRect) so that a CSS transform running on the element while we
// sample it cannot skew the result.

// Per-kind particle budget. `divisor` turns a size metric into a target count,
// then everything is clamped and finally rescaled against a global cap.
const BUDGETS = {
    // text: sample the glyphs themselves
    text: { metric: 'area', divisor: 150, min: 44, max: 620 },
    // frame: the outline of a glass card
    frame: { metric: 'perimeter', divisor: 16, min: 26, max: 130 },
    // ring: the circumference of a circular badge
    ring: { metric: 'perimeter', divisor: 9, min: 18, max: 70 },
}

const scratch = { canvas: null, ctx: null }

function getScratch() {
    if (!scratch.canvas) {
        scratch.canvas = document.createElement('canvas')
        scratch.ctx = scratch.canvas.getContext('2d', { willReadFrequently: true })
    }
    return scratch
}

function num(value, fallback = 0) {
    const parsed = parseFloat(value)
    return Number.isFinite(parsed) ? parsed : fallback
}

// Layout (untransformed) box, walked up the offsetParent chain. Transforms are
// deliberately ignored: during the entrance animation the elements are still
// offset by their keyframe transform, but they will settle here.
export function layoutRect(el) {
    let left = 0
    let top = 0
    let node = el
    while (node && node.nodeType === 1) {
        left += node.offsetLeft || 0
        top += node.offsetTop || 0
        node = node.offsetParent
    }
    const width = el.offsetWidth || 0
    const height = el.offsetHeight || 0
    return {
        left,
        top,
        width,
        height,
        right: left + width,
        bottom: top + height,
    }
}

// Greedy word wrap that mirrors what the browser does for normal prose.
export function wrapText(ctx, text, maxWidth) {
    const lines = []
    for (const paragraph of String(text ?? '').split('\n')) {
        const words = paragraph.split(/\s+/).filter(Boolean)
        if (!words.length) {
            lines.push('')
            continue
        }
        let line = words[0]
        for (let i = 1; i < words.length; i += 1) {
            const candidate = `${line} ${words[i]}`
            if (ctx.measureText(candidate).width <= maxWidth) {
                line = candidate
            } else {
                lines.push(line)
                line = words[i]
            }
        }
        lines.push(line)
    }
    return lines.length ? lines : ['']
}

// Even-stride downsample: keeps a uniform spread instead of clumping.
export function limit(points, max) {
    if (!max || points.length <= max) return points
    const stride = points.length / max
    const out = []
    for (let i = 0; i < max; i += 1) {
        out.push(points[Math.floor(i * stride)])
    }
    return out
}

function budgetFor(kind, rect) {
    const rule = BUDGETS[kind] ?? BUDGETS.text
    const metric =
        rule.metric === 'perimeter'
            ? 2 * (rect.width + rect.height)
            : rect.width * rect.height
    return Math.max(rule.min, Math.min(rule.max, Math.round(metric / rule.divisor)))
}

// Harvest the opaque pixels of an element's rendered text.
export function sampleTextPoints(el, { max = 500, step, threshold = 90 } = {}) {
    if (!el) return []
    const rect = layoutRect(el)
    if (rect.width < 4 || rect.height < 4) return []

    const style = window.getComputedStyle(el)
    const padLeft = num(style.paddingLeft)
    const padRight = num(style.paddingRight)
    const padTop = num(style.paddingTop)
    const fontSize = num(style.fontSize, 16)
    const lineWidth = Math.max(8, Math.floor(el.clientWidth - padLeft - padRight))
    const lineHeight =
        style.lineHeight === 'normal' || !num(style.lineHeight)
            ? fontSize * 1.35
            : num(style.lineHeight, fontSize * 1.35)

    const { canvas, ctx } = getScratch()
    const font = `${style.fontStyle || 'normal'} ${style.fontWeight || '400'} ${fontSize}px ${style.fontFamily}`
    ctx.font = font
    ctx.textBaseline = 'alphabetic'
    const lines = wrapText(ctx, el.textContent, lineWidth)

    const width = Math.max(1, Math.ceil(lineWidth))
    const height = Math.max(1, Math.ceil(lines.length * lineHeight))
    // Resizing the canvas resets its state, so the font is applied again below.
    canvas.width = width
    canvas.height = height
    ctx.font = font
    ctx.textBaseline = 'alphabetic'

    const metrics = ctx.measureText('M')
    const ascent = num(metrics.fontBoundingBoxAscent, fontSize * 0.8)
    ctx.fillStyle = '#fff'
    lines.forEach((line, i) => {
        if (line) ctx.fillText(line, 0, i * lineHeight + ascent)
    })

    const stride = Math.max(2, step || (fontSize >= 26 ? 4 : 3))
    const data = ctx.getImageData(0, 0, width, height).data
    const points = []
    for (let y = 0; y < height; y += stride) {
        for (let x = 0; x < width; x += stride) {
            if (data[(y * width + x) * 4 + 3] > threshold) {
                points.push({
                    x: rect.left + padLeft + x,
                    y: rect.top + padTop + y,
                })
            }
        }
    }
    return limit(points, max)
}

// Points hugging the border of a box — reads as the card's edge glowing apart.
export function sampleFramePoints(rect, count, thickness = 3.5) {
    const points = []
    if (count <= 0 || rect.width < 4 || rect.height < 4) return points
    let guard = count * 120
    while (points.length < count && guard > 0) {
        guard -= 1
        const x = rect.left + Math.random() * rect.width
        const y = rect.top + Math.random() * rect.height
        const toEdge = Math.min(x - rect.left, rect.right - x, y - rect.top, rect.bottom - y)
        if (toEdge <= thickness) points.push({ x, y })
    }
    return points
}

// Even spread around an ellipse — used for the round A/B/C/D badges.
export function sampleRingPoints(rect, count) {
    const points = []
    if (count <= 0) return points
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const rx = rect.width / 2
    const ry = rect.height / 2
    for (let i = 0; i < count; i += 1) {
        const angle = (i / count) * Math.PI * 2
        points.push({ x: cx + Math.cos(angle) * rx, y: cy + Math.sin(angle) * ry })
    }
    return points
}

export function collectSparkleSources(root) {
    if (!root || typeof root.querySelectorAll !== 'function') return []
    return Array.from(root.querySelectorAll('[data-sparkle]'))
        .map((el) => ({ el, kind: el.dataset.sparkle }))
        .filter(({ kind }) => kind in BUDGETS)
}

// Walk every [data-sparkle] element in `root` and return grouped spawn points,
// trimmed so the whole burst stays inside `cap` particles. The cap is a ceiling,
// not a target: a group whose text holds fewer pixels than its quota simply
// contributes fewer points, and if there are so many groups that the per-group
// floor alone exceeds `cap`, the floor wins and the cap cannot be met.
export function buildSparklePoints(root, { cap = 1500, minPerGroup = 10 } = {}) {
    const groups = []
    let wanted = 0

    for (const { el, kind } of collectSparkleSources(root)) {
        const rect = layoutRect(el)
        if (rect.width < 4 || rect.height < 4) continue
        const budget = budgetFor(kind, rect)
        wanted += budget
        groups.push({ el, kind, rect, budget })
    }

    const scale = wanted > cap ? cap / wanted : 1
    const quotas = groups.map(({ budget }) => Math.max(minPerGroup, Math.round(budget * scale)))

    // Flooring small quotas can push the sum back over the cap, so shave the
    // excess off the largest quotas - they have the most detail to spare.
    let excess = quotas.reduce((sum, quota) => sum + quota, 0) - cap
    while (excess > 0) {
        let largest = -1
        for (let i = 0; i < quotas.length; i += 1) {
            if (quotas[i] > minPerGroup && (largest < 0 || quotas[i] > quotas[largest])) largest = i
        }
        if (largest < 0) break
        quotas[largest] -= 1
        excess -= 1
    }

    return groups
        .map(({ el, kind, rect }, i) => {
            const max = quotas[i]
            let points = []
            if (kind === 'frame') points = sampleFramePoints(rect, max)
            else if (kind === 'ring') points = sampleRingPoints(rect, max)
            else points = sampleTextPoints(el, { max })
            return { kind, rect, points }
        })
        .filter((group) => group.points.length > 0)
}
