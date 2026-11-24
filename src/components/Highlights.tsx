import { projects } from '../data/projects'

export function Highlights() {
  const modsquad = projects.find((project) => project.id === 'modsquad')
  const thesis = projects.find((project) => project.id === 'thesis')
  return (
    <section className="highlights wrap" aria-labelledby="highlights-title">
      <h2 className="eyebrow" id="highlights-title">
        RECOGNITION & RESEARCH
      </h2>
      <div className="highlights-grid">
        {modsquad?.achievements?.map((award) => (
          <a className="highlight" href="#work" key={award}>
            <span className="highlight-label">MODSQUAD</span>
            <h3>{award}</h3>
            <p>Stream moderation for strong language.</p>
          </a>
        ))}
        {thesis && (
          <a className="highlight" href="#work">
            <span className="highlight-label">HONOURS RESEARCH</span>
            <h3>{thesis.status}</h3>
            <p>
              Post-hoc facial synthesis for generated video. REB application
              complete.
            </p>
          </a>
        )}
      </div>
    </section>
  )
}
