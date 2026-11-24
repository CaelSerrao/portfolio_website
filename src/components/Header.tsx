import { useState } from 'react'
import { profile } from '../data/profile'

export function Brand() {
  return (
    <a className="brand" href="#home" aria-label={`${profile.name} home`}>
      <span className="brand-icon" aria-hidden="true">
        c<span>.</span>
      </span>
      <span>{profile.name.toLowerCase()}</span>
    </a>
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="header wrap">
      <Brand />
      <button
        className="menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? 'Close' : 'Menu'}
      </button>
      <nav
        id="navigation"
        className={menuOpen ? 'open' : ''}
        aria-label="Main navigation"
      >
        <a href="#work" onClick={() => setMenuOpen(false)}>
          Selected work
        </a>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a
          className="nav-contact"
          href="#contact"
          onClick={() => setMenuOpen(false)}
        >
          Let’s connect{' '}
          <span className="small-plus" aria-hidden="true">
            +
          </span>
        </a>
      </nav>
    </header>
  )
}
