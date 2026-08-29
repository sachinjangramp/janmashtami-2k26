import './ModuleIndex.css'

export default function ModuleIndex({ onLogout }) {
  return (
    <div className="index-screen">
      <img className="index-bg" src="/vrindavan-dawn.jpg" alt="" />
      <main className="index-content">
        <p className="index-kicker">IYF 2K26</p>
        <h1>Module Index</h1>
        <p className="index-note">
          Login is complete. The module index and quiz presentation come next.
        </p>
        <button type="button" onClick={onLogout}>
          Sign out
        </button>
      </main>
    </div>
  )
}
