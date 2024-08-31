export function BlackcessLogo() {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#f8f8f8", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#e8e8e8", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>

      {/* Rounded square background */}
      <rect
        x="10"
        y="10"
        width="180"
        height="180"
        rx="40"
        ry="40"
        fill="url(#bgGradient)"
      />

      {/* Blackcess logo */}
      <g transform="translate(30, 50)">
        {/* Envelope base */}
        <path d="M0 0 L70 50 L140 0 L140 100 L0 100 Z" fill="#000000" />

        {/* Left flap */}
        <path d="M0 0 L70 50 L0 70 Z" fill="#333333" />

        {/* Right flap */}
        <path d="M140 0 L70 50 L140 70 Z" fill="#333333" />

        {/* 'B' shape */}
        <path
          d="M50 30 Q70 30 70 45 Q70 60 50 60 H40 V30 H50 Z"
          fill="#ffffff"
        />
        <path
          d="M50 60 Q70 60 70 75 Q70 90 50 90 H40 V60 H50 Z"
          fill="#ffffff"
        />
      </g>
    </svg>
  );
}
