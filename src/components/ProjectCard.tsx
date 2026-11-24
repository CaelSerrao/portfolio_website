import type { Project } from '../types/portfolio'
import { ProjectArtwork } from './ProjectArtwork'

type Props = {
  project: Project
  onOpen: (project: Project, trigger: HTMLButtonElement) => void
}

export function ProjectCard({ project, onOpen }: Props) {
  return (
    <article className="project" aria-labelledby={`${project.id}-title`}>
      <button
        className={`project-visual ${project.artwork}`}
        onClick={(e) => onOpen(project, e.currentTarget)}
        aria-label={`Read about ${project.title}`}
      >
        <span className="visual-tag">{project.label}</span>
        <ProjectArtwork artwork={project.artwork} />
        <div className="visual-caption">
          <span>{project.title.toUpperCase()}</span>
          <span>{project.caption}</span>
        </div>
      </button>
      <div className="project-info">
        <p className="project-type">{project.category}</p>
        {project.status && <p className="project-status">{project.status}</p>}
        <div className="project-title">
          <h3 id={`${project.id}-title`}>{project.title}</h3>
          <button
            className="plus-button"
            onClick={(e) => onOpen(project, e.currentTarget)}
            aria-label={`${project.title} project details`}
          >
            +
          </button>
        </div>
        <p>{project.summary}</p>
        {project.achievements && (
          <ul
            className="project-awards"
            aria-label={`${project.title} recognition`}
          >
            {project.achievements.map((award) => (
              <li key={award}>{award}</li>
            ))}
          </ul>
        )}
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
