import { profile } from '../data/profile'
import { DecorativeMesh } from './DecorativeMesh'
import { ExternalLink } from './ExternalLink'

export function Hero() {
  return (
    <section className="hero wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="line" />
          {profile.role}
        </p>
        <h1 id="hero-title">
          Curiosity.
          <br />
          Code.
          <br />
          <span>Things that work.</span>
        </h1>
        <p className="intro">
          Hey, I’m {profile.firstName}. {profile.introduction}
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#work">
            Explore my work <span aria-hidden="true">+</span>
          </a>
          <ExternalLink className="text-link" href={profile.github}>
            Find me on GitHub
          </ExternalLink>
        </div>
      </div>
      <DecorativeMesh />
      <div className="hero-bottom">
        <span>PRODUCTS & ENTREPRENEURSHIP</span>
        <span>AI & RESEARCH</span>
        <span>ANDROID & WEB</span>
        <a href="#work" className="scroll-note">
          SCROLL TO EXPLORE
        </a>
      </div>
    </section>
  )
}
