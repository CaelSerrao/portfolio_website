import type { CSSProperties } from 'react'
import type { Artwork } from '../types/portfolio'
import { ProjectIcon } from './ProjectIcon'

type CustomProperties = CSSProperties & { [key: `--${string}`]: string }

const identities = {
  product: {
    icon: 'product',
    title: 'Modsquad',
    subtitle: 'STREAM MODERATION',
  },
  research: {
    icon: 'research',
    title: 'Ethical bias. Facial synthesis.',
    subtitle: 'HONOURS THESIS',
  },
  minutes: {
    icon: 'minutes',
    title: 'Quorum',
    subtitle: 'COURT MINUTES & NOTES',
  },
  fitness: {
    icon: 'fitness',
    title: 'Flexora',
    subtitle: 'GYM APP · WORKING TITLE',
  },
  android: {
    icon: 'android',
    title: 'DroidDex',
    subtitle: 'ANDROID · KOTLIN DEMO',
  },
  portfolio: {
    mark: '</>',
    title: 'This portfolio',
    subtitle: 'REACT · TYPESCRIPT · VITE',
  },
} as const

export function ProjectArtwork({ artwork }: { artwork: Artwork }) {
  if (artwork in identities) {
    const identity = identities[artwork as keyof typeof identities]
    return (
      <div className="identity-art" aria-hidden="true">
        {'icon' in identity ? (
          <span className="identity-icon">
            <ProjectIcon kind={identity.icon} />
          </span>
        ) : (
          <span className="identity-mark">{identity.mark}</span>
        )}
        <span className="identity-title">{identity.title}</span>
        <span className="identity-subtitle">{identity.subtitle}</span>
      </div>
    )
  }
  if (artwork === 'jarvis')
    return (
      <div className="jarvis-orbit" aria-hidden="true">
        <div className="orbit o1" />
        <div className="orbit o2" />
        <div className="orbit o3" />
        <span className="jarvis-mark">J</span>
      </div>
    )
  if (artwork === 'feed')
    return (
      <div className="feed-art" aria-hidden="true">
        <span className="feed-question">
          Your tastes change.
          <br />
          <em>Can your feed?</em>
        </span>
        <div className="feed-bars">
          {[35, 65, 46, 90, 58, 78, 42, 68].map((height, i) => (
            <i
              key={i}
              style={
                {
                  '--h': `${height}%`,
                  '--c': [
                    '#b576ff',
                    '#c69bff',
                    '#d3b1ff',
                    '#eadbff',
                    '#bf8cff',
                    '#a760ff',
                    '#8626ff',
                    '#eadbff',
                  ][i],
                } as CustomProperties
              }
            />
          ))}
        </div>
      </div>
    )
  if (artwork === 'kat')
    return (
      <div aria-hidden="true">
        <div className="waveform">
          {Array.from({ length: 65 }, (_, i) => (
            <i
              key={i}
              style={
                {
                  '--height': `${9 + Math.abs(Math.sin(i * 0.71) * Math.cos(i * 0.19)) * 70}px`,
                  '--opacity': `${0.35 + 0.65 * Math.sin((i / 65) * Math.PI)}`,
                } as CustomProperties
              }
            />
          ))}
        </div>
        <div className="caption-sample">
          <span className="caption-time">00:00:04,200</span>
          <span>Give every word a place.</span>
        </div>
      </div>
    )
  return (
    <svg className="face-art" viewBox="0 0 400 220" aria-hidden="true">
      <g fill="none" stroke="#bc8fff" strokeWidth="1">
        <path
          d="M126 40h-20v24m168-24h20v24M106 156v24h20m168-24v24h-20"
          strokeWidth="2"
        />
        <ellipse cx="200" cy="109" rx="48" ry="65" />
        <path
          d="M155 87q45-28 90 0m-90 23q45 15 90 0m-82 31q37-18 74 0m-37-97v130M169 54l62 110M231 54l-62 110M157 87l80 54m6-54-80 54"
          opacity=".5"
        />
      </g>
      <g fill="#e6d4ff">
        {[
          [178, 94],
          [222, 94],
          [200, 120],
          [184, 142],
          [216, 142],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" />
        ))}
      </g>
      <path d="M110 115h180" stroke="#8626ff" opacity=".4" />
      <text x="325" y="92" fill="#c6a1f3" fontFamily="monospace" fontSize="10">
        FACE
      </text>
      <text x="325" y="110" fill="#c6a1f3" fontFamily="monospace" fontSize="10">
        EMBEDDING
      </text>
    </svg>
  )
}
