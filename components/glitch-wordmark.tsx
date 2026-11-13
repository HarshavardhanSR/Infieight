type GlitchWordmarkProps = {
  className?: string;
};

export function GlitchWordmark({ className = "" }: GlitchWordmarkProps) {
  return (
    <span className={`glitch-wordmark ${className}`.trim()}>
      <span className="glitch-wordmark-green" aria-hidden="true">
        INFIEIGHT
      </span>
      <span className="glitch-wordmark-main">INFIEIGHT</span>
      <span className="glitch-wordmark-band" aria-hidden="true">
        INFIEIGHT
      </span>
    </span>
  );
}
