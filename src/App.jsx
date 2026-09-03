import { useState } from 'react'
import LoginScreen from './screens/LoginScreen.jsx'
import ModuleIndex from './screens/ModuleIndex.jsx'
import ManageScreen from './screens/ManageScreen.jsx'
import QuizScreen from './screens/QuizScreen.jsx'
import { loadQuiz, saveQuiz } from './data/quizStore.js'

const AUTH_KEY = 'iyf-2k26-auth'

export default function App() {
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem(AUTH_KEY) === '1',
  )
  const [quiz, setQuiz] = useState(loadQuiz)
  const [view, setView] = useState('index')
  const [activeModuleId, setActiveModuleId] = useState(null)

  const activeModule = quiz.modules.find((module) => module.id === activeModuleId)

  const handleLogin = () => {
    sessionStorage.setItem(AUTH_KEY, '1')
    setAuthed(true)
    setView('index')
  }

  const handleLogout = () => {
    sessionStorage.removeItem(AUTH_KEY)
    setAuthed(false)
    setView('index')
    setActiveModuleId(null)
  }

  const handleQuizChange = (modules) => {
    const next = { modules }
    setQuiz(next)
    saveQuiz(next)
  }

  if (!authed) {
    return <LoginScreen onSuccess={handleLogin} />
  }

  if (view === 'manage') {
    return (
      <ManageScreen
        modules={quiz.modules}
        onChange={handleQuizChange}
        onBack={() => setView('index')}
      />
    )
  }

  if (view === 'quiz' && activeModule) {
    return (
      <QuizScreen
        module={activeModule}
        onBack={() => {
          setView('index')
          setActiveModuleId(null)
        }}
      />
    )
  }

  return (
    <ModuleIndex
      modules={quiz.modules}
      onOpenModule={(id) => {
        setActiveModuleId(id)
        setView('quiz')
      }}
      onManage={() => setView('manage')}
      onLogout={handleLogout}
    />
  )
}