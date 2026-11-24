import { Header, Brand } from './components/Header'
import { Hero } from './components/Hero'
import { Highlights } from './components/Highlights'
import { Projects } from './components/Projects'
import { ExternalLink } from './components/ExternalLink'
import { profile } from './data/profile'

const currentYear = new Date().getFullYear()

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Highlights />
        <Projects />
        <section
          className="about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="wrap grid grid-cols-1 gap-9 min-[801px]:grid-cols-2 min-[801px]:gap-16">
            <div>
              <p className="eyebrow">THE PERSON BEHIND THE PROJECTS</p>
              <h2
                id="about-title"
                className="text-[2.625rem] leading-[1.18] min-[801px]:text-5xl"
              >
                A builder.
                <br />A problem solver.
                <br />
                <span className="muted">Always learning.</span>
              </h2>
            </div>
            <div className="about-content">
              <p className="about-lead">
                I’m {profile.firstName}, a developer building products and
                exploring responsible AI through research.
              </p>
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="toolkit">
                <p className="eyebrow">TOOLS I BUILD WITH</p>
                {profile.skills.map((skill) => (
                  <div className="skill-row" key={skill.label}>
                    <span>{skill.label}</span>
                    <p>{skill.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          className="contact wrap"
          id="contact"
          aria-labelledby="contact-title"
        >
          <p className="eyebrow">GOOD THINGS START WITH A CONVERSATION</p>
          <div className="contact-content">
            <h2 id="contact-title">
              Have something
              <br />
              in mind<span className="accent">?</span>
            </h2>
            <div>
              <p>
                For opportunities, collaborations, or a closer look at what I’m
                building — find me on GitHub.
              </p>
              <ExternalLink className="button primary" href={profile.github}>
                Let’s connect on GitHub <span aria-hidden="true">+</span>
              </ExternalLink>
            </div>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <Brand />
        <p>
          Built with curiosity. © {currentYear} {profile.name}.
        </p>
        <a href="#home">Back to top</a>
      </footer>
    </>
  )
}
