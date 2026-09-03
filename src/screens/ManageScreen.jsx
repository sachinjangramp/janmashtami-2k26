import { useMemo, useState } from 'react'
import StageBackground from '../components/StageBackground.jsx'
import { emptyModule, emptyQuestion } from '../data/quizStore.js'
import './ManageScreen.css'

export default function ManageScreen({ modules, onChange, onBack }) {
    const [selectedId, setSelectedId] = useState(modules[0]?.id ?? null)
    const selected = useMemo(
        () => modules.find((module) => module.id === selectedId) ?? null,
        [modules, selectedId],
    )

    const updateModule = (patch) => {
        if (!selected) return
        onChange(
            modules.map((module) =>
                module.id === selected.id ? { ...module, ...patch } : module,
            ),
        )
    }

    const updateQuestion = (questionId, patch) => {
        if (!selected) return
        updateModule({
            questions: selected.questions.map((question) =>
                question.id === questionId ? { ...question, ...patch } : question,
            ),
        })
    }

    const addModule = () => {
        const module = emptyModule()
        onChange([...modules, module])
        setSelectedId(module.id)
    }

    const removeModule = (id) => {
        const next = modules.filter((module) => module.id !== id)
        onChange(next)
        if (selectedId === id) {
            setSelectedId(next[0]?.id ?? null)
        }
    }

    return (
        <div className="stage manage-screen">
            <StageBackground />
            <div className="stage-wash" />

            <header className="manage-header glass">
                <div>
                    <p className="manage-kicker">Controller</p>
                    <h1>Manage quiz</h1>
                </div>
                <button type="button" className="btn-gold" onClick={onBack}>
                    Module Index
                </button>
            </header>

            <div className="manage-body">
                <aside className="manage-list glass">
                    <div className="manage-list-top">
                        <h2>Modules</h2>
                        <button type="button" className="btn-gold" onClick={addModule}>
                            Add
                        </button>
                    </div>
                    <ul>
                        {modules.map((module, index) => (
                            <li key={module.id}>
                                <button
                                    type="button"
                                    className={module.id === selectedId ? 'is-active' : ''}
                                    onClick={() => setSelectedId(module.id)}
                                >
                                    <strong>
                                        {String(index + 1).padStart(2, '0')} {module.title}
                                    </strong>
                                    {module.hard ? <span className="hard-tag">Hard</span> : null}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>

                {selected ? (
                    <section className="manage-editor glass">
                        <div className="manage-editor-top">
                            <label>
                                Module title
                                <input
                                    value={selected.title}
                                    onChange={(event) => updateModule({ title: event.target.value })}
                                />
                            </label>
                            <label className="manage-hard">
                                <input
                                    type="checkbox"
                                    checked={selected.hard}
                                    onChange={(event) => updateModule({ hard: event.target.checked })}
                                />
                                Hard tag
                            </label>
                            <button
                                type="button"
                                className="btn-ghost"
                                onClick={() => removeModule(selected.id)}
                            >
                                Delete
                            </button>
                        </div>

                        <div className="manage-questions">
                            {selected.questions.map((question, qIndex) => (
                                <article key={question.id} className="manage-question">
                                    <header>
                                        <h3>Question {qIndex + 1}</h3>
                                        <button
                                            type="button"
                                            className="btn-ghost"
                                            onClick={() =>
                                                updateModule({
                                                    questions: selected.questions.filter((item) => item.id !== question.id),
                                                })
                                            }
                                        >
                                            Remove
                                        </button>
                                    </header>
                                    <textarea
                                        rows={2}
                                        value={question.text}
                                        placeholder="Question text"
                                        onChange={(event) =>
                                            updateQuestion(question.id, { text: event.target.value })
                                        }
                                    />
                                    <div className="manage-options">
                                        {question.options.map((option, optionIndex) => (
                                            <label key={optionIndex}>
                                                <input
                                                    type="radio"
                                                    name={`correct-${question.id}`}
                                                    checked={question.correctIndex === optionIndex}
                                                    onChange={() =>
                                                        updateQuestion(question.id, { correctIndex: optionIndex })
                                                    }
                                                />
                                                <input
                                                    value={option}
                                                    placeholder={`Option ${optionIndex + 1}`}
                                                    onChange={(event) => {
                                                        const options = [...question.options]
                                                        options[optionIndex] = event.target.value
                                                        updateQuestion(question.id, { options })
                                                    }}
                                                />
                                            </label>
                                        ))}
                                    </div>
                                    <textarea
                                        rows={2}
                                        value={question.explanation}
                                        placeholder="Explanation shown after reveal"
                                        onChange={(event) =>
                                            updateQuestion(question.id, { explanation: event.target.value })
                                        }
                                    />
                                </article>
                            ))}
                            <button
                                type="button"
                                className="btn-gold"
                                onClick={() =>
                                    updateModule({
                                        questions: [...selected.questions, emptyQuestion()],
                                    })
                                }
                            >
                                Add question
                            </button>
                        </div>
                    </section>
                ) : (
                    <section className="manage-editor glass">
                        <p className="manage-none">Add a module to begin.</p>
                    </section>
                )}
            </div>
        </div>
    )
}