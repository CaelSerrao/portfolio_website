import { useEffect, useRef } from 'react'
import type { Project } from '../types/portfolio'
import { ExternalLink } from './ExternalLink'

type Props = {
  project: Project
  trigger: HTMLButtonElement | null
  onClose: () => void
}

export function ProjectDialog({ project, trigger, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    dialog.showModal()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
      if (dialog.open) dialog.close()
      trigger?.focus()
    }
  }, [trigger])

  return (
    <dialog
      ref={ref}
      aria-labelledby="dialog-title"
      onCancel={(e) => {
        e.preventDefault()
        onClose()
      }}
      onClose={() => {
        if (!ref.current?.open) onClose()
      }}
      onClick={(e) => {
        if (e.target !== e.currentTarget) return
        const r = e.currentTarget.getBoundingClientRect()
        if (
          e.clientX < r.left ||
          e.clientX > r.right ||
          e.clientY < r.top ||
          e.clientY > r.bottom
        )
          onClose()
      }}
    >
      <div className="dialog-top">
        <span className="eyebrow">PROJECT NOTES</span>
        <button
          autoFocus
          className="dialog-close"
          aria-label="Close project details"
          onClick={onClose}
        >
          ×
        </button>
      </div>
      <p className="project-type">{project.category}</p>
      <h2 id="dialog-title">{project.fullTitle ?? project.title}</h2>
      {project.status && <p className="project-status">{project.status}</p>}
      <p>{project.description}</p>
      {project.achievements && (
        <section className="dialog-recognition" aria-label="Recognition">
          <h3>Recognition</h3>
          <ul className="list-disc">
            {project.achievements.map((award) => (
              <li key={award}>{award}</li>
            ))}
          </ul>
        </section>
      )}
      <h3>Inside the project</h3>
      <ul className="list-disc">
        {project.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      {project.note && <p className="dialog-note">{project.note}</p>}
      {project.repoUrl && (
        <ExternalLink className="button primary" href={project.repoUrl}>
          View source on GitHub <span aria-hidden="true">+</span>
        </ExternalLink>
      )}
    </dialog>
  )
}
