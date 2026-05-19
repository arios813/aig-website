interface LogoProps {
  size?: number
  className?: string
}

export default function Logo({ size = 40, className = '' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="American Investment Group Inc. Logo"
    >
      {/* Outer platinum ring */}
      <circle
        cx="50"
        cy="50"
        r="47"
        fill="none"
        stroke="#D8DDE3"
        strokeWidth="2.5"
      />
      {/* Inner globe circle */}
      <circle
        cx="50"
        cy="50"
        r="34"
        fill="none"
        stroke="#C4CDD6"
        strokeWidth="1.4"
      />
      {/* Equator line */}
      <line x1="16" y1="50" x2="84" y2="50" stroke="#C4CDD6" strokeWidth="1.2" />
      {/* Vertical prime meridian */}
      <line x1="50" y1="16" x2="50" y2="84" stroke="#C4CDD6" strokeWidth="1.2" />
      {/* Central longitude ellipse */}
      <ellipse
        cx="50"
        cy="50"
        rx="18"
        ry="34"
        fill="none"
        stroke="#C4CDD6"
        strokeWidth="1"
      />
      {/* Upper latitude arc */}
      <path
        d="M 24 34 Q 50 27 76 34"
        fill="none"
        stroke="#C4CDD6"
        strokeWidth="1"
      />
      {/* Lower latitude arc */}
      <path
        d="M 24 66 Q 50 73 76 66"
        fill="none"
        stroke="#C4CDD6"
        strokeWidth="1"
      />
      {/* Center dot */}
      <circle cx="50" cy="50" r="3" fill="#D8DDE3" />
      {/* Small decorative dots on outer ring at cardinal points */}
      <circle cx="50" cy="3" r="2" fill="#D8DDE3" />
      <circle cx="50" cy="97" r="2" fill="#D8DDE3" />
      <circle cx="3" cy="50" r="2" fill="#D8DDE3" />
      <circle cx="97" cy="50" r="2" fill="#D8DDE3" />
    </svg>
  )
}
