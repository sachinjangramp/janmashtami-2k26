import { useEffect, useMemo, useState } from 'react'
import StageBackground from '../components/StageBackground.jsx'
import './QuizScreen.css'

const LETTERS = ['A', 'B', 'C', 'D']

export default function QuizScreen({ module, onBack }) {
    const questions = module.questions ?? []
    const [index, setIndex] = useState(0)
    const [revealed, setRevealed] = useState(false)

    const question = questions[index]
    const total = questions.length

    const optionItems = useMemo(() => question?.options ?? [], [question])

    useEffect(() => {
        setIndex(0)
        setRevealed(false)
    }, [module.id])

    useEffect(() => {
        setRevealed(false)
    }, [index])

    useEffect(() => {
        const onKey = (event) => {
            if (!total) return
            if (event.code === 'ArrowRight') {
                event.preventDefault()
                setIndex((current) => Math.min(total - 1, current + 1))
            }
            if (event.code === 'ArrowLeft') {
                event.preventDefault()
                setIndex((current) => Math.max(0, current - 1))
            }
            if (event.code === 'Space') {
                event.preventDefault()
                setRevealed(true)
            }
        }

        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [total])

    return (
        <div className="stage quiz-screen">
            <StageBackground />
            <div className="stage-wash" />

            <button type="button" className="quiz-index-btn" onClick={onBack}>
                Module Index
            </button>

            {question ? (
                <main className="quiz-board">
                    <header className="quiz-meta">
                        <p>
                            {module.title}
                            {module.hard ? <span className="hard-tag">Hard</span> : null}
                        </p>
                        <span>
                            Question {index + 1} of {total}
                        </span>
                    </header>

                    <h1 className="quiz-question glass">{question.text}</h1>

                    <div className="quiz-options">
                        {optionItems.map((option, optionIndex) => {
                            const isCorrect = optionIndex === question.correctIndex
                            const showCorrect = revealed && isCorrect
                            return (
                                <div
                                    key={`${question.id}-${optionIndex}`}
                                    className={`quiz-option glass${showCorrect ? ' is-correct' : ''}`}
                                >
                                    <em>{LETTERS[optionIndex]}</em>
                                    <span>{option}</span>
                                </div>
                            )
                        })}
                    </div>

                    {revealed ? (
                        <p className="quiz-explain glass">{question.explanation}</p>
                    ) : (
                        <p className="quiz-hint">Space to reveal · arrows to move</p>
                    )}
                </main>
            ) : (
                <main className="quiz-empty glass">
                    <h1>No questions yet</h1>
                    <p>Add questions in Manage quiz, then return here.</p>
                </main>
            )}
        </div>
    )
}

