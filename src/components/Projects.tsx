import { useState } from 'react'
import { projects } from '../data/projects'
import { profile } from '../data/profile'
import type { Category, Project } from '../types/portfolio'
import { ExternalLink } from './ExternalLink'
import { ProjectCard } from './ProjectCard'
import { ProjectDialog } from './ProjectDialog'

const filters = [
  { id: 'all', label: 'All work' },
  { id: 'products', label: 'Products' },
  { id: 'research', label: 'Research' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'ai', label: 'AI & vision' },
  { id: 'apps', label: 'Applications' },
  { id: 'data', label: 'Data' },
] as const

export function Projects() {
  const [filter, setFilter] = useState<Category | 'all'>('all')
  const [selected, setSelected] = useState<{
    project: Project
    trigger: HTMLButtonElement
  } | null>(null)
  const visible = projects.filter(
    (p) =>
      filter === 'all' ||
      (p.categories as readonly Category[]).includes(filter),
  )
  return (
    <section
      className="work-section wrap"
      id="work"
      aria-labelledby="work-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">PRODUCTS, RESEARCH & EXPERIMENTS</p>
          <h2 id="work-title">
            Selected work<span className="accent">.</span>
          </h2>
        </div>
        <p>
          Different problems.
          <br />
          The same drive to figure them out.
        </p>
      </div>
      <div className="filters" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f.id}
            className={filter === f.id ? 'active' : ''}
            aria-pressed={filter === f.id}
            aria-controls="project-gallery"
            onClick={() => setFilter(f.id)}
          >
            {f.label}
            {f.id === 'all' && <span>{projects.length}</span>}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {visible.length} {visible.length === 1 ? 'project' : 'projects'} shown
      </p>
      <div
        id="project-gallery"
        className="grid grid-cols-1 gap-x-7 gap-y-12 min-[561px]:grid-cols-2"
      >
        {visible.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            onOpen={(project, trigger) => setSelected({ project, trigger })}
          />
        ))}
      </div>
      <div className="all-repos">
        <span>There’s more where that came from.</span>
        <ExternalLink
          className="text-link"
          href={`${profile.github}?tab=repositories`}
        >
          Explore all repositories
        </ExternalLink>
      </div>
      {selected && (
        <ProjectDialog
          key={selected.project.id}
          project={selected.project}
          trigger={selected.trigger}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  )
}
