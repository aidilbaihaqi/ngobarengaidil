import type { Config } from "tailwindcss";

/** Wraps a token so Tailwind opacity modifiers (bg-signal/10) keep working. */
const token = (name: string) => `hsl(var(--${name}) / <alpha-value>)`;

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        // The width at which a labelled ladder rail clears the content column.
        rail: "1360px",
      },
      colors: {
        // Assay palette
        ground: {
          DEFAULT: token("ground"),
          deep: token("ground-deep"),
        },
        surface: {
          DEFAULT: token("surface"),
          raised: token("surface-raised"),
        },
        ink: {
          DEFAULT: token("ink"),
          soft: token("ink-soft"),
        },
        muted: {
          DEFAULT: token("muted"),
          foreground: token("muted"),
        },
        rule: {
          DEFAULT: token("rule"),
          soft: token("rule-soft"),
        },
        signal: {
          DEFAULT: token("signal"),
          ink: token("signal-ink"),
          bright: token("signal-bright"),
        },

        // shadcn compatibility
        background: token("background"),
        foreground: token("foreground"),
        card: {
          DEFAULT: token("card"),
          foreground: token("card-foreground"),
        },
        popover: {
          DEFAULT: token("popover"),
          foreground: token("popover-foreground"),
        },
        primary: {
          DEFAULT: token("primary"),
          foreground: token("primary-foreground"),
        },
        secondary: {
          DEFAULT: token("secondary"),
          foreground: token("secondary-foreground"),
        },
        accent: {
          DEFAULT: token("accent"),
          foreground: token("accent-foreground"),
        },
        destructive: {
          DEFAULT: token("destructive"),
          foreground: token("destructive-foreground"),
        },
        border: token("border"),
        input: token("input"),
        ring: token("ring"),
      },
      fontFamily: {
        // Mono is the display face on this site, not a code-only utility.
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        micro: ["var(--step--2)", { lineHeight: "1.4" }],
        caption: ["var(--step--1)", { lineHeight: "1.55" }],
        body: ["var(--step-0)", { lineHeight: "1.65" }],
        lead: ["var(--step-1)", { lineHeight: "1.6" }],
        title: ["var(--step-2)", { lineHeight: "1.25" }],
        headline: ["var(--step-3)", { lineHeight: "1.15" }],
        display: ["var(--step-4)", { lineHeight: "0.98" }],
      },
      letterSpacing: {
        label: "0.14em",
        tightest: "-0.035em",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 1px)",
        sm: "calc(var(--radius) - 2px)",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('preline/plugin'),
    require("tailwindcss-animate"),
  ],
} satisfies Config;
