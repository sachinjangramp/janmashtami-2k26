import { useState } from 'react'
import LoginScreen from './screens/LoginScreen.jsx'
import ModuleIndex from './screens/ModuleIndex.jsx'

const AUTH_KEY = 'iyf-2k26-auth'

export default function App() {
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem(AUTH_KEY) === '1',
  )

  const handleLogin = () => {
    sessionStorage.setItem(AUTH_KEY, '1')
    setAuthed(true)
  }

  const handleLogout = () => {
    sessionStorage.removeItem(AUTH_KEY)
    setAuthed(false)
  }

  if (!authed) {
    return <LoginScreen onSuccess={handleLogin} />
  }

  return <ModuleIndex onLogout={handleLogout} />
}
