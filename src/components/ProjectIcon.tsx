type IconKind = 'product' | 'research' | 'minutes' | 'fitness' | 'android'

/** Matching outline symbols for the five product and research cards. */
export function ProjectIcon({ kind }: { kind: IconKind }) {
  const shapes = {
    product: (
      <>
        <path d="M12 2 20 5v6c0 5-8 10-8 10S4 16 4 11V5Z" />
        <path d="m8.5 11.5 2.5 2.5 4.5-5" />
      </>
    ),
    research: (
      <>
        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1M13 2v6h6l-6-6Z" />
        <path d="M8 7h2M8 11h3M8 15h2" />
        <circle cx="16" cy="14" r="3.5" />
        <path d="m18.5 16.5 3 3" />
      </>
    ),
    minutes: (
      <>
        <path d="M12 3v18M7 21h10M4 7h16M12 3l-1.5 2h3Z" />
        <path d="m4 7-3 7h6L4 7Zm16 0-3 7h6l-3-7Z" />
        <path d="M1 14c0 2 6 2 6 0m10 0c0 2 6 2 6 0" />
      </>
    ),
    fitness: (
      <>
        <rect x="3" y="7" width="5" height="10" rx="1" />
        <rect x="16" y="7" width="5" height="10" rx="1" />
        <path d="M8 10h8M8 14h8M1 10v4m22-4v4M5.5 7v10M18.5 7v10" />
      </>
    ),
    android: (
      <>
        <path d="M7 7h10c2.2 0 3.2 1.5 3.7 3.7l1 4.9c.6 2.7-1.7 4.1-3.6 2.2L16 16H8l-2.1 1.8C4 19.7 1.7 18.3 2.3 15.6l1-4.9C3.8 8.5 4.8 7 7 7Z" />
        <path d="M7 10v4m-2-2h4M10 4h4" />
        <circle cx="16" cy="11" r=".65" fill="currentColor" />
        <circle cx="18.5" cy="13.5" r=".65" fill="currentColor" />
      </>
    ),
  }
  return (
    <svg
      className="project-symbol"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.45"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {shapes[kind]}
    </svg>
  )
}
