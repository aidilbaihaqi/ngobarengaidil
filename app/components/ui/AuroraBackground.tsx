/**
 * The soft colour weather behind a hero: two brand-hued fields drifting very
 * slowly, faded out toward the content below. Pure CSS — the blobs are
 * pre-blurred radial gradients (no filter: blur), and the drift animates
 * transform only, so it composites even on modest phones.
 */
/* Fades every edge, not just the bottom — on narrow screens the blobs are
   wider than the viewport and would otherwise show a hard rectangular edge. */
const FADE =
  "radial-gradient(ellipse 75% 85% at 50% 40%, black 35%, transparent 100%)";

export default function AuroraBackground({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{
        maskImage: FADE,
        WebkitMaskImage: FADE,
      }}
    >
      <div
        className="absolute -top-1/3 left-[8%] h-[34rem] w-[34rem] rounded-full opacity-50 dark:opacity-35 animate-aurora-a"
        style={{
          background:
            "radial-gradient(circle at center, rgba(26,115,232,0.35), transparent 62%)",
        }}
      />
      <div
        className="absolute -top-1/4 right-[6%] h-[30rem] w-[30rem] rounded-full opacity-50 dark:opacity-30 animate-aurora-b"
        style={{
          background:
            "radial-gradient(circle at center, rgba(43,196,138,0.3), transparent 62%)",
        }}
      />
      <div
        className="absolute top-[8%] left-[42%] h-[24rem] w-[24rem] rounded-full opacity-40 dark:opacity-25 animate-aurora-c"
        style={{
          background:
            "radial-gradient(circle at center, rgba(31,177,193,0.28), transparent 62%)",
        }}
      />
    </div>
  );
}
