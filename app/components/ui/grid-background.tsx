import { cn } from "../../lib/utils";
import React from "react";

export function GridBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[-1]">
      {/* Grid Pattern */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#dde2e8_1px,transparent_1px),linear-gradient(to_bottom,#dde2e8_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#18293b_1px,transparent_1px),linear-gradient(to_bottom,#18293b_1px,transparent_1px)]",
        )}
      />
      
      {/* Linear gradient overlay to fade into background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background"></div>
      
      {/* Additional fade effect at the bottom for smoother transition */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-background via-background/90 to-transparent"></div>
    </div>
  );
}

// Keep the original demo component for reference if needed
export function GridBackgroundDemo() {
  return (
    <div className="relative flex h-[10rem] w-full items-center justify-center bg-white dark:bg-neutral-950">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#dde2e8_1px,transparent_1px),linear-gradient(to_bottom,#dde2e8_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#18293b_1px,transparent_1px),linear-gradient(to_bottom,#18293b_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-neutral-950"></div>
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        Backgrounds
      </p>
    </div>
  );
}
