function project(x: number, z: number) {
  const radius = Math.sqrt(x * x + z * z)
  const y =
    1.95 * Math.exp((-radius * radius) / 7) * Math.cos(radius * 1.7) +
    0.17 * Math.sin(x * 1.5 + z)
  return [310 + (x - z) * 37, 292 + (x + z) * 14 - y * 58]
}

const paths = [0, 1].flatMap((axis) =>
  Array.from({ length: 29 }, (_, i) => {
    const row = i - 14
    return Array.from({ length: 113 }, (_, j) => {
      const column = j - 56
      const point = axis
        ? project(column / 12, row / 3)
        : project(row / 3, column / 12)
      return `${j === 0 ? 'M' : 'L'}${point.map((n) => n.toFixed(2)).join(',')}`
    }).join('')
  }),
)
const points = [
  [0, 0],
  [1.2, 2.2],
  [-2.3, 1.7],
  [3, -1.2],
  [-2.8, -2],
  [1, -2.6],
]

export function DecorativeMesh() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="art-label">
        <span>IDEAS INTO SYSTEMS</span>
        <span>CS / LAB</span>
      </div>
      <svg viewBox="0 0 620 510" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="glow">
            <stop stopColor="#8626ff" stopOpacity=".12" />
            <stop offset="1" stopColor="#8626ff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="terrainColor" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#d3b1ff" />
            <stop offset="1" stopColor="#6421a6" />
          </linearGradient>
        </defs>
        <circle cx="310" cy="260" r="255" fill="url(#glow)" />
        <g fill="none" stroke="url(#terrainColor)" strokeWidth=".9">
          {paths.map((d, i) => (
            <path
              key={i}
              d={d}
              opacity={0.32 + 0.36 * (1 - Math.abs((i % 29) - 14) / 20)}
            />
          ))}
        </g>
        <g fill="#e1c7ff">
          {points.map(([x, z], i) => {
            const [cx, cy] = project(x, z)
            return <circle key={i} cx={cx} cy={cy} r="2.8" />
          })}
        </g>
      </svg>
      <div className="art-footer">
        <span>EXPERIMENT. BUILD. REFINE.</span>
        <span className="cross">+</span>
      </div>
    </div>
  )
}
