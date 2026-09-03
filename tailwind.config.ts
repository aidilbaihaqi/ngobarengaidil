import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette")
  .default as (colors: Record<string, unknown>) => Record<string, string>;

/**
 * The dot-pattern ground the bento cards are drawn on.
 *
 * `bg-dot-<color>` was used across those cards but never defined, so the
 * utility resolved to nothing and every card rendered on bare white or black.
 * Inlined as a data URI so it needs no extra dependency.
 */
const dotPattern = (color: string) =>
  `url("data:image/svg+xml,${encodeURIComponent(
    // width/height are required: without an intrinsic size the SVG stretches to
    // fill the element and the "dot" becomes one circle the size of the card.
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><circle fill="${color}" cx="10" cy="10" r="1.6257413380501518"/></svg>`,
  )}")`;

/* ---------------------------------------------------------------------------
 * Brand palette
 *
 * Four source colours drive the whole site:
 *
 *   Deep navy    #0D1B2A   the dark ground and the darkest ink
 *   Primary blue #1A73E8   the action colour
 *   Soft gray    #E6E9EC   the light surface
 *   Fresh green  #2BC48A   the positive / secondary accent
 *
 * Each is expanded into a 50..950 ramp so ordinary Tailwind shades resolve to
 * the brand instead of the stock hues. The ramps are then aliased onto the
 * built-in colour names the components already use, which is what keeps ~280
 * existing `purple-500` / `cyan-400` / `neutral-900` utilities on-palette
 * without touching every file. Semantic hues (red, amber, yellow, orange) are
 * deliberately left stock so warnings and errors still read as warnings.
 * ------------------------------------------------------------------------- */

/** Navy-tinted neutrals: soft gray at the top, deep navy at the bottom. */
const mist = {
  50: "#f9fafb",
  100: "#f0f2f5",
  200: "#e6e9ec", // Soft gray, exact
  300: "#cbd1d8",
  400: "#97a3af",
  500: "#687a8d",
  600: "#4e6074",
  700: "#36495e",
  800: "#223549",
  900: "#152637",
  950: "#0d1b2a", // Deep navy, exact
};

/** The action ramp, anchored on Primary blue at 500. */
const brandBlue = {
  50: "#f0f6ff",
  100: "#dcebfe",
  200: "#bad7fc",
  300: "#87b8f8",
  400: "#5096f1",
  500: "#1a73e8", // Primary blue, exact
  600: "#195fc8",
  700: "#184aa0",
  800: "#183b7c",
  900: "#183162",
  950: "#101f41",
};

/** A deeper, more royal blue. Gives blue-to-X gradients somewhere to travel. */
const royal = {
  50: "#f0f4ff",
  100: "#dce5fe",
  200: "#bfcffd",
  300: "#90acf9",
  400: "#5e86f3",
  500: "#3564e3",
  600: "#244bcc",
  700: "#223ca5",
  800: "#1e3280",
  900: "#1c2d63",
  950: "#111e40",
};

/** The blue-to-green midpoint, so three-stop gradients stay inside the family. */
const lagoon = {
  50: "#eefbfc",
  100: "#d4f4f7",
  200: "#a9e8ef",
  300: "#6fd6e2",
  400: "#3acad9",
  500: "#1fb1c1",
  600: "#168fa2",
  700: "#126f82",
  800: "#115869",
  900: "#104251",
  950: "#092935",
};

/** The positive ramp, anchored on Fresh green at 500. */
const fresh = {
  50: "#effbf6",
  100: "#d6f5e9",
  200: "#aeead3",
  300: "#7eddb8",
  400: "#50d3a1",
  500: "#2bc48a", // Fresh green, exact
  600: "#20a775",
  700: "#188660",
  800: "#146b4e",
  900: "#12543f",
  950: "#093428",
};

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
  		fontFamily: {
  			// Body copy.
  			sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  			// Secondary face: headings, labels, and anything that carries voice.
  			display: ['var(--font-space-grotesk)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  			secondary: ['var(--font-space-grotesk)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  			mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
  			// Bitmap display face, in the spirit of Minecraftia.
  			pixel: ['var(--font-pixel)', 'ui-monospace', 'monospace'],
  		},
  		colors: {
  			// Brand names, for new code that wants to be explicit.
  			navy: mist,
  			mist,
  			brand: brandBlue,
  			fresh,
  			// Aliases onto the stock hue names the components already use.
  			gray: mist,
  			neutral: mist,
  			slate: mist,
  			zinc: mist,
  			stone: mist,
  			blue: brandBlue,
  			sky: brandBlue,
  			indigo: royal,
  			violet: royal,
  			purple: royal,
  			cyan: lagoon,
  			teal: lagoon,
  			pink: fresh,
  			fuchsia: fresh,
  			green: fresh,
  			emerald: fresh,
  			background: 'hsl(var(--background) / <alpha-value>)',
  			foreground: 'hsl(var(--foreground) / <alpha-value>)',
  			card: {
  				DEFAULT: 'hsl(var(--card) / <alpha-value>)',
  				foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
  				foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
  				foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
  				foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
  				foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
  				foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
  				foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
  			},
  			border: 'hsl(var(--border) / <alpha-value>)',
  			input: 'hsl(var(--input) / <alpha-value>)',
  			ring: 'hsl(var(--ring) / <alpha-value>)',
  			chart: {
  				'1': 'hsl(var(--chart-1) / <alpha-value>)',
  				'2': 'hsl(var(--chart-2) / <alpha-value>)',
  				'3': 'hsl(var(--chart-3) / <alpha-value>)',
  				'4': 'hsl(var(--chart-4) / <alpha-value>)',
  				'5': 'hsl(var(--chart-5) / <alpha-value>)'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			// Used by the bento cards; previously undefined, so they had no lift.
  			input:
  				'0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)'
  		}
  	}
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('preline/plugin'),
      require("tailwindcss-animate"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        { "bg-dot": (value) => ({ backgroundImage: dotPattern(String(value)) }) },
        {
          values: flattenColorPalette(
            theme("backgroundColor") as Record<string, unknown>,
          ),
          type: "color",
        },
      );
    }),
],
} satisfies Config;
