const Logo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Ulyg Dog Logo"
  >
    <g transform="translate(5, 5) scale(0.9)">
      {/* Head */}
      <ellipse cx="50" cy="55" rx="40" ry="45" fill="#C5FAFF" stroke="#7BB8C4" strokeWidth="1" />
      {/* Left Ear */}
      <path d="M 20 30 Q 10 10 30 20 Z" fill="#7BB8C4" stroke="#5E9BA8" strokeWidth="0.5" />
      {/* Right Ear */}
      <path d="M 80 30 Q 90 10 70 20 Z" fill="#7BB8C4" stroke="#5E9BA8" strokeWidth="0.5" />
      {/* Left Eye (wonky) */}
      <circle cx="35" cy="50" r="6" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />
      <circle cx="37" cy="52" r="2" fill="#000000" />
      {/* Right Eye (different size) */}
      <circle cx="65" cy="55" r="7" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />
      <circle cx="63" cy="57" r="2" fill="#000000" />
      {/* Nose */}
      <ellipse cx="50" cy="70" rx="5" ry="4" fill="#000000" />
      {/* Mouth */}
      <path d="M 35 85 Q 50 95 65 85" stroke="#000000" strokeWidth="1.5" fill="none" />
      {/* Tongue sticking out */}
      <path d="M 50 85 Q 55 95 52 100 Q 47 97 50 87 Z" fill="#FF69B4" />
      {/* Ugly spots */}
      <circle cx="40" cy="65" r="1.5" fill="#5E9BA8" />
      <circle cx="60" cy="70" r="1" fill="#5E9BA8" />
    </g>
  </svg>
);

export default Logo;
