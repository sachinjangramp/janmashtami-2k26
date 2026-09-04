import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import StageBackground from '../components/StageBackground.jsx'
import SparkleField from '../components/SparkleField.jsx'
import './QuizScreen.css'

const LETTERS = ['A', 'B', 'C', 'D']

// Choreography, in ms. These must stay in step with QuizScreen.css:
// quiz-dissolve is 400ms with up to a 70ms stagger (so every exiting child is
// transparent by 470ms), and quiz-materialize is 620ms with up to a 130ms
// stagger plus the shimmer tail (so everything is settled by 760ms).
const SWAP_MS = 470
const ARRIVE_MS = 760
const GUARD_MS = 40

function usePrefersReducedMotion() {
    const [reduced, setReduced] = useState(
        () =>
            typeof window !== 'undefined' &&
            Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches),
    )

    useEffect(() => {
        const query = window.matchMedia?.('(prefers-reduced-motion: reduce)')
        if (!query) return undefined
        const onChange = () => setReduced(query.matches)
        query.addEventListener('change', onChange)
        return () => query.removeEventListener('change', onChange)
    }, [])

    return reduced
}

export default function QuizScreen({ module, onBack }) {
    const questions = module.questions ?? []
    const [index, setIndex] = useState(0)
    const [revealed, setRevealed] = useState(false)
    const [phase, setPhase] = useState('idle')
    const [direction, setDirection] = useState('next')

    const boardRef = useRef(null)
    const sparklesRef = useRef(null)
    const timersRef = useRef([])
    const busyRef = useRef(false)
    const reducedMotion = usePrefersReducedMotion()

    const question = questions[index]
    const total = questions.length

    const optionItems = useMemo(() => question?.options ?? [], [question])
    const correctIndexes = useMemo(
        () => question?.correctIndexes ?? (question?.correctIndex != null ? [question.correctIndex] : [0]),
        [question],
    )
    const isMulti = correctIndexes.length > 1

    const clearTimers = useCallback(() => {
        timersRef.current.forEach((id) => clearTimeout(id))
        timersRef.current = []
    }, [])

    const later = useCallback((fn, ms) => {
        timersRef.current.push(setTimeout(fn, ms))
    }, [])

    useEffect(() => () => clearTimers(), [clearTimers])

    useEffect(() => {
        // A different module invalidates any transition already in flight.
        clearTimers()
        busyRef.current = false
        sparklesRef.current?.clear()
        setIndex(0)
        setRevealed(false)
        setPhase('idle')
    }, [clearTimers, module.id])

    useEffect(() => {
        setRevealed(false)
    }, [index])

    // The outgoing question scatters into sparkles; the next one condenses out
    // of them, sweeping in from the direction of travel.
    const goTo = useCallback(
        (nextIndex) => {
            if (!total) return
            const target = Math.max(0, Math.min(total - 1, nextIndex))
            if (target === index || busyRef.current) return

            const dir = target > index ? 'next' : 'prev'
            busyRef.current = true
            clearTimers()
            setDirection(dir)

            if (reducedMotion) {
                setIndex(target)
                setRevealed(false)
                busyRef.current = false
                return
            }

            setPhase('out')
            // Sample before the exit class lands, while the layout is at rest.
            sparklesRef.current?.dissolve(boardRef.current, dir)

            later(() => {
                setIndex(target)
                setRevealed(false)
                setPhase('in')
                // Two frames lets the new question paint, so its glyphs exist to
                // be sampled for the condensing sparkles.
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        sparklesRef.current?.gather(boardRef.current, dir)
                    })
                })
            }, SWAP_MS)

            // Unlock shortly after the swap so a fast presenter can keep moving
            // instead of waiting for the whole entrance to finish.
            later(() => {
                busyRef.current = false
            }, SWAP_MS + GUARD_MS)

            later(() => {
                setPhase('idle')
            }, SWAP_MS + ARRIVE_MS)
        },
        [clearTimers, index, later, reducedMotion, total],
    )

    useEffect(() => {
        const onKey = (event) => {
            if (!total) return
            if (event.code === 'ArrowRight') {
                event.preventDefault()
                goTo(index + 1)
            }
            if (event.code === 'ArrowLeft') {
                event.preventDefault()
                goTo(index - 1)
            }
            if (event.code === 'Space') {
                event.preventDefault()
                setRevealed(true)
            }
        }

        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [goTo, index, total])

    const boardClass = [
        'quiz-board',
        `quiz-board--${direction}`,
        phase === 'out' ? 'is-leaving' : '',
        phase === 'in' ? 'is-arriving' : '',
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <div className="stage quiz-screen">
            <StageBackground />
            <div className="stage-wash" />

            <button type="button" className="quiz-index-btn" onClick={onBack}>
                Module Index
            </button>

            {question ? (
                <main className={boardClass} ref={boardRef}>
                    <div className="quiz-aura" aria-hidden="true" />

                    <header className="quiz-meta">
                        <p>
                            {module.title}
                            {module.hard ? <span className="hard-tag">Hard</span> : null}
                        </p>
                        <span className="quiz-meta-right">
                            {isMulti && <span className="quiz-multi-badge">Select {correctIndexes.length}</span>}
                            Question {index + 1} of {total}
                        </span>
                    </header>

                    <h1 className="quiz-question glass" data-sparkle="text">
                        {question.text}
                    </h1>

                    <div className="quiz-options">
                        {optionItems.map((option, optionIndex) => {
                            const isCorrect = correctIndexes.includes(optionIndex)
                            const showCorrect = revealed && isCorrect
                            return (
                                <div
                                    key={`${question.id}-${optionIndex}`}
                                    className={`quiz-option glass${showCorrect ? ' is-correct' : ''}`}
                                    data-sparkle="frame"
                                >
                                    <em data-sparkle="ring">{LETTERS[optionIndex]}</em>
                                    <span data-sparkle="text">{option}</span>
                                </div>
                            )
                        })}
                    </div>

                    {revealed ? (
                        <div className="quiz-bottom">
                            <p className="quiz-explain glass" data-sparkle="text">
                                {question.explanation}
                            </p>
                        </div>
                    ) : (
                        <div className="quiz-bottom quiz-bottom--hint">
                            <p className="quiz-hint" data-sparkle="text">
                                {isMulti ? `Pick ${correctIndexes.length} · ` : ''}Space to reveal · arrows to move
                            </p>
                        </div>
                    )}
                </main>
            ) : (
                <main className="quiz-empty glass">
                    <h1>No questions yet</h1>
                    <p>Add questions in Manage quiz, then return here.</p>
                </main>
            )}

            <SparkleField ref={sparklesRef} />
        </div>
    )
}
