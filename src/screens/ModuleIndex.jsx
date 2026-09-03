import StageBackground from '../components/StageBackground.jsx'
import './ModuleIndex.css'

function pad(index) {
  return String(index + 1).padStart(2, '0')
}

export default function ModuleIndex({
  modules,
  onOpenModule,
  onManage,
  onLogout,
}) {

  return (
    <div className="stage index-screen">
      <StageBackground />
      <div className="stage-wash" />

      <header className="index-header glass">
        <div className="index-brand">
          <p className="index-kicker">Hare Krishna · IYF 2K26</p>
          <h1>Module Index</h1>
        </div>
        <div className="index-actions">
          <button type="button" className="btn-ghost" onClick={onLogout}>
            Sign out
          </button>
          <button type="button" className="btn-gold" onClick={onManage}>
            Manage quiz
          </button>
        </div>
      </header>

      <main className="index-grid-wrap">
        {modules.length === 0 ? (
          <div className="index-empty glass">
            <p>No modules yet</p>
            <span>Open Manage quiz to add the first module.</span>
            <button type="button" className="btn-gold" onClick={onManage}>
              Manage quiz
            </button>
          </div>
        ) : (
          <div className="index-grid">
            {modules.map((module, index) => (
              <button
                key={module.id}
                type="button"
                className="module-card glass"
                onClick={() => onOpenModule(module.id)}
              >
                <div className="module-card-top">
                  <span className="module-num">{pad(index)}</span>
                  {module.hard ? <span className="hard-tag">Hard</span> : <span />}
                </div>
                <h2>{module.title}</h2>
                <p>
                  {module.questions.length}{' '}
                  {module.questions.length === 1 ? 'question' : 'questions'}
                </p>
              </button>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}