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
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      
      {/* Linear gradient overlay to fade into background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white dark:via-black/70 dark:to-black"></div>
      
      {/* Additional fade effect at the bottom for smoother transition */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-white via-white/90 to-transparent dark:from-black dark:via-black/90 dark:to-transparent"></div>
    </div>
  );
}

// Keep the original demo component for reference if needed
export function GridBackgroundDemo() {
  return (
    <div className="relative flex h-[10rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        Backgrounds
      </p>
    </div>
  );
}
