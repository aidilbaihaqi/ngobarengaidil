/**
 * Ambient ground: faint vertical lanes, the way samples run down a gel.
 * Deliberately near-invisible — the ladder rail is the page's one accessory,
 * and this only has to keep the background from reading as flat paper.
 */
export function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[-1] h-full w-full bg-ground"
    >
      <div
        className="absolute inset-0 opacity-40 [background-size:120px_100%] [background-image:linear-gradient(to_right,hsl(var(--rule))_1px,transparent_1px)]"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.25) 55%, transparent 92%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.25) 55%, transparent 92%)",
        }}
      />
    </div>
  );
}
