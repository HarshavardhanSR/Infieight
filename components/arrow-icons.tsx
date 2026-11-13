type ArrowIconProps = {
  direction?: "down" | "right";
};

export function ArrowIcon({ direction = "right" }: ArrowIconProps) {
  return direction === "down" ? (
    <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
      <path
        d="M10 3.5v12m0 0-4.5-4.5M10 15.5l4.5-4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  ) : (
    <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
      <path
        d="M3.5 10h12m0 0L11 5.5M15.5 10 11 14.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
