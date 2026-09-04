import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from 'react'
import { buildSparklePoints } from '../lib/sparkles.js'
import './SparkleField.css'

const TAU = Math.PI * 2

// Stage palette: gold and saffron with a peacock glint for contrast.
const PALETTE = [
    { rgb: '255, 246, 214', weight: 3 },
    { rgb: '255, 219, 122', weight: 4 },
    { rgb: '240, 193, 75', weight: 4 },
    { rgb: '224, 155, 18', weight: 2 },
    { rgb: '140, 226, 210', weight: 1 },
    { rgb: '255, 255, 255', weight: 3 },
]

const PALETTE_TOTAL = PALETTE.reduce((sum, entry) => sum + entry.weight, 0)
const MAX_PARTICLES = 3000

let atlas = null

function makeDot(rgb) {
    const size = 48
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')
    const glow = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
    glow.addColorStop(0, 'rgba(255, 255, 255, 0.95)')
    glow.addColorStop(0.18, `rgba(${rgb}, 0.8)`)
    glow.addColorStop(0.46, `rgba(${rgb}, 0.24)`)
    glow.addColorStop(1, `rgba(${rgb}, 0)`)
    ctx.fillStyle = glow
    ctx.fillRect(0, 0, size, size)
    return canvas
}

// Four-point star, for the handful of particles that should read as "magic".
function makeStar(rgb) {
    const size = 64
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')
    const outer = size * 0.47
    const inner = size * 0.07
    ctx.translate(size / 2, size / 2)
    ctx.beginPath()
    for (let i = 0; i < 8; i += 1) {
        const angle = (i / 8) * TAU - Math.PI / 2
        const radius = i % 2 === 0 ? outer : inner
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
    }
    ctx.closePath()
    const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, outer)
    glow.addColorStop(0, 'rgba(255, 255, 255, 0.98)')
    glow.addColorStop(0.32, `rgba(${rgb}, 0.72)`)
    glow.addColorStop(1, `rgba(${rgb}, 0)`)
    ctx.fillStyle = glow
    ctx.fill()
    return canvas
}

// Built on first use so the module stays import-safe outside a browser.
function getAtlas() {
    if (!atlas) {
        atlas = {
            dots: PALETTE.map((entry) => makeDot(entry.rgb)),
            stars: PALETTE.map((entry) => makeStar(entry.rgb)),
        }
    }
    return atlas
}

function pickColor() {
    let roll = Math.random() * PALETTE_TOTAL
    for (let i = 0; i < PALETTE.length; i += 1) {
        roll -= PALETTE[i].weight
        if (roll <= 0) return i
    }
    return PALETTE.length - 1
}

const rand = (min, max) => min + Math.random() * (max - min)

// Sparkles that lift off the outgoing question and scatter on the air.
function spawnDissolve(groups, dirSign, origin, particles) {
    const sweep = 260
    groups.forEach(({ kind, rect, points }) => {
        const span = Math.max(1, rect.width)
        points.forEach((point) => {
            const t = Math.min(1, Math.max(0, (point.x - rect.left) / span))
            // The peel runs in the direction of travel, so the leading edge goes first.
            const delay = (dirSign > 0 ? t : 1 - t) * sweep + rand(0, 110)
            const star = Math.random() < 0.14
            particles.push({
                mode: 'dissolve',
                x: point.x - origin.x + rand(-1.4, 1.4),
                y: point.y - origin.y + rand(-1.4, 1.4),
                vx: dirSign * rand(0.012, 0.06) + rand(-0.02, 0.02),
                vy: -rand(0.035, 0.115),
                buoy: -rand(0.00002, 0.00007),
                amp: rand(0.00008, 0.0002),
                freq: rand(0.0012, 0.0032),
                life: rand(900, 1700),
                age: 0,
                delay,
                size: star ? rand(7, 15) : kind === 'frame' ? rand(2.6, 5.4) : rand(2.2, 6.4),
                color: pickColor(),
                star,
                rot: Math.random() * TAU,
                spin: rand(-0.0035, 0.0035),
                seed: Math.random() * TAU,
                tw: rand(0.006, 0.016),
                alpha: rand(0.62, 1),
            })
        })
    })
}

// Sparkles that drift in from off-target and settle onto the incoming glyphs.
function spawnGather(groups, dirSign, origin, particles) {
    const sweep = 200
    groups.forEach(({ kind, rect, points }) => {
        const span = Math.max(1, rect.width)
        points.forEach((point) => {
            const t = Math.min(1, Math.max(0, (point.x - rect.left) / span))
            const tx = point.x - origin.x + rand(-1, 1)
            const ty = point.y - origin.y + rand(-1, 1)
            const angle = Math.random() * TAU
            const radius = rand(50, 200)
            const star = Math.random() < 0.18
            particles.push({
                mode: 'gather',
                x0: tx + Math.cos(angle) * radius * 0.75 + dirSign * rand(40, 170),
                y0: ty + Math.sin(angle) * radius * 0.6 + rand(10, 90),
                tx,
                ty,
                x: 0,
                y: 0,
                wob: rand(6, 34),
                freq: rand(0.0016, 0.004),
                life: rand(640, 1180),
                age: 0,
                delay: (dirSign > 0 ? t : 1 - t) * sweep + rand(0, 90),
                size: star ? rand(7, 16) : kind === 'frame' ? rand(2.6, 5.6) : rand(2.4, 6.8),
                color: pickColor(),
                star,
                rot: Math.random() * TAU,
                spin: rand(-0.004, 0.004),
                seed: Math.random() * TAU,
                tw: rand(0.006, 0.018),
                alpha: rand(0.66, 1),
            })
        })
    })
}

// Dissolve envelope: snap in, then a long soft burn-out.
function dissolveEnvelope(t) {
    if (t < 0.1) return t / 0.1
    return (1 - (t - 0.1) / 0.9) ** 1.7
}

// Gather envelope: fade up, hold, then a small "pop" as the spark lands.
function gatherEnvelope(t) {
    if (t < 0.18) return t / 0.18
    const decay = (1 - (t - 0.18) / 0.82) ** 1.25
    const pop = 1 + 1.1 * Math.max(0, 1 - Math.abs(t - 0.9) / 0.1)
    return decay * pop
}

const easeOutCubic = (t) => 1 - (1 - t) ** 3

const SparkleField = forwardRef(function SparkleField(_props, ref) {
    const canvasRef = useRef(null)
    const engineRef = useRef({ particles: [], raf: 0, last: 0, width: 0, height: 0 })
    const startRef = useRef(null)

    // Keep the backing store matched to the stage size and device pixel ratio.
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return undefined
        const engine = engineRef.current

        const resize = () => {
            const dpr = Math.min(2, window.devicePixelRatio || 1)
            const width = canvas.clientWidth || canvas.parentElement?.clientWidth || 0
            const height = canvas.clientHeight || canvas.parentElement?.clientHeight || 0
            engine.width = width
            engine.height = height
            canvas.width = Math.max(1, Math.round(width * dpr))
            canvas.height = Math.max(1, Math.round(height * dpr))
            // Resizing clears the backing store, so restore the CSS-pixel transform.
            canvas.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0)
        }

        resize()
        const observer = new ResizeObserver(resize)
        observer.observe(canvas.parentElement ?? canvas)
        window.addEventListener('resize', resize)
        return () => {
            observer.disconnect()
            window.removeEventListener('resize', resize)
        }
    }, [])

    // One animation loop, started on demand and stopped when the field empties.
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return undefined
        const engine = engineRef.current
        const ctx = canvas.getContext('2d')
        const sprites = getAtlas()

        const frame = (now) => {
            const dt = Math.min(48, Math.max(1, now - engine.last))
            engine.last = now

            ctx.clearRect(0, 0, engine.width, engine.height)
            ctx.globalCompositeOperation = 'lighter'

            const alive = engine.particles
            for (let i = 0; i < alive.length; i += 1) {
                const p = alive[i]
                if (p.delay > 0) {
                    p.delay -= dt
                    continue
                }
                p.age += dt
                const t = p.age / p.life
                if (t >= 1) {
                    alive[i] = alive[alive.length - 1]
                    alive.pop()
                    i -= 1
                    continue
                }

                let alpha
                let size
                if (p.mode === 'dissolve') {
                    p.vx += Math.sin(now * p.freq + p.seed) * p.amp * dt
                    p.vy += p.buoy * dt
                    const drag = Math.exp(-dt / 640)
                    p.vx *= drag
                    p.vy *= drag
                    p.x += p.vx * dt
                    p.y += p.vy * dt
                    alpha = dissolveEnvelope(t) * (0.62 + 0.38 * Math.sin(now * p.tw + p.seed)) * p.alpha
                    size = p.size * (1.15 - 0.6 * t)
                } else {
                    const e = easeOutCubic(t)
                    const wobble = (1 - e) * p.wob
                    p.x = p.tx + (p.x0 - p.tx) * (1 - e) + Math.cos(now * p.freq + p.seed) * wobble
                    p.y = p.ty + (p.y0 - p.ty) * (1 - e) + Math.sin(now * p.freq * 0.9 + p.seed) * wobble
                    alpha = gatherEnvelope(t) * (0.7 + 0.3 * Math.sin(now * p.tw + p.seed)) * p.alpha
                    size = p.size * (1.3 - 0.5 * t)
                }

                if (alpha <= 0.01 || size <= 0.2) continue
                p.rot += p.spin * dt
                const sprite = p.star ? sprites.stars[p.color] : sprites.dots[p.color]
                ctx.globalAlpha = Math.min(1, alpha)
                if (p.star) {
                    ctx.save()
                    ctx.translate(p.x, p.y)
                    ctx.rotate(p.rot)
                    ctx.drawImage(sprite, -size / 2, -size / 2, size, size)
                    ctx.restore()
                } else {
                    ctx.drawImage(sprite, p.x - size / 2, p.y - size / 2, size, size)
                }
            }

            ctx.globalAlpha = 1
            ctx.globalCompositeOperation = 'source-over'
            engine.raf = alive.length ? requestAnimationFrame(frame) : 0
        }

        startRef.current = () => {
            if (engine.raf) return
            engine.last = performance.now()
            engine.raf = requestAnimationFrame(frame)
        }

        return () => {
            if (engine.raf) cancelAnimationFrame(engine.raf)
            engine.raf = 0
            engine.particles = []
            startRef.current = null
        }
    }, [])

    const burst = useCallback((root, direction, mode) => {
        const canvas = canvasRef.current
        const engine = engineRef.current
        if (!canvas || !root) return
        const groups = buildSparklePoints(root)
        if (!groups.length) return

        const box = canvas.getBoundingClientRect()
        const origin = { x: box.left, y: box.top }
        const dirSign = direction === 'prev' ? 1 : -1
        if (mode === 'gather') spawnGather(groups, dirSign, origin, engine.particles)
        else spawnDissolve(groups, dirSign, origin, engine.particles)

        // Hard ceiling so a very large module cannot tank the frame rate.
        if (engine.particles.length > MAX_PARTICLES) {
            engine.particles.splice(0, engine.particles.length - MAX_PARTICLES)
        }
        startRef.current?.()
    }, [])

    useImperativeHandle(
        ref,
        () => ({
            dissolve: (root, direction) => burst(root, direction, 'dissolve'),
            gather: (root, direction) => burst(root, direction, 'gather'),
            clear: () => {
                engineRef.current.particles = []
            },
        }),
        [burst],
    )

    return <canvas ref={canvasRef} className="sparkle-field" aria-hidden="true" />
})

export default SparkleField
