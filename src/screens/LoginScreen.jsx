import { useState } from 'react'
import { QUIZ_PASSWORD } from '../config.js'
import './LoginScreen.css'

export default function LoginScreen({ onSuccess }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)

  const submit = (event) => {
    event.preventDefault()
    if (password === QUIZ_PASSWORD) {
      onSuccess()
      return
    }
    setError(true)
    setShake(true)
    window.setTimeout(() => setShake(false), 520)
  }

  return (
    <div className="login-screen">
      <img className="login-bg" src="/vrindavan-dawn.jpg" alt="" />

      <main className={`login-invite${shake ? ' is-shake' : ''}`}>
        <p className="login-kicker">Hare Krishna</p>

        <h1 className="login-title">
          <span className="login-title-ey">IYF 2K26</span>
          <span className="login-title-sub">Janmashtami Quiz</span>
        </h1>

        <div className="login-rule" aria-hidden="true" />

        <p className="login-sanskrit">॥ जन्माष्टमी प्रश्नोत्तरी ॥</p>

        <form className="login-form" onSubmit={submit} autoComplete="off">
          <label className="login-label" htmlFor="quiz-password">
            Controller password
          </label>
          <input
            id="quiz-password"
            type="password"
            name="password"
            autoComplete="current-password"
            autoFocus
            spellCheck={false}
            placeholder="Enter password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value)
              setError(false)
            }}
            aria-invalid={error}
          />
          {error ? <p className="login-error">That password is not correct</p> : null}
          <button type="submit">Enter</button>
        </form>
      </main>
    </div>
  )
}
