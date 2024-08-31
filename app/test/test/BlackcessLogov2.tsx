import { Card } from "@/components/ui/card";

export function BlackcessLogoV2() {
  return (
    <Card className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(10, 10)">
          {/* Central node */}
          <circle cx="30" cy="30" r="8" fill="#000000" />

          {/* Outer nodes */}
          <circle cx="10" cy="30" r="6" fill="#333333" />
          <circle cx="50" cy="30" r="6" fill="#333333" />
          <circle cx="30" cy="10" r="6" fill="#333333" />
          <circle cx="30" cy="50" r="6" fill="#333333" />

          {/* Connecting lines */}
          <line
            x1="18"
            y1="30"
            x2="42"
            y2="30"
            stroke="#000000"
            strokeWidth="2"
          />
          <line
            x1="30"
            y1="18"
            x2="30"
            y2="42"
            stroke="#000000"
            strokeWidth="2"
          />

          {/* Diagonal connecting lines */}
          <line
            x1="16"
            y1="16"
            x2="44"
            y2="44"
            stroke="#000000"
            strokeWidth="2"
          />
          <line
            x1="44"
            y1="16"
            x2="16"
            y2="44"
            stroke="#000000"
            strokeWidth="2"
          />
        </g>
      </svg>
    </Card>
  );
}
