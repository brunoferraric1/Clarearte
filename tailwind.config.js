/** @type {import('tailwindcss').Config} */

// helper functions
const rem = (px) => `${px / 16}rem`;
/**
 * Fluid clamp(min@320px → max@1440px)
 * Smoothly scales between min and max values.
 */
const fluid = (minPx, maxPx) =>
  `clamp(${rem(minPx)}, calc(${rem(minPx)} + (${maxPx - minPx}) * ((100vw - 320px) / (1120))), ${rem(maxPx)})`;

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'aspect-video',
    'aspect-square',
    'aspect-[4/3]',
    'aspect-[3/4]',
    'aspect-[2/3]',
    'aspect-[16/9]',
  ],
  theme: {
    extend: {
      fontFamily: {
        // defined in your index.css
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"], // Zen Kaku Gothic New
        serif: ["var(--font-serif)", "ui-serif", "serif"], // Playfair Display
        mono: ["var(--font-mono)", "ui-monospace", "monospace"], // Roboto Mono

        // use serif font (Playfair Display) for big hero titles
        display: ["var(--font-serif)", "ui-serif", "serif"],
      },

      fontSize: {
        /* DISPLAY (large hero text – visual only) */
        "display-2": [fluid(44, 92), { lineHeight: 1.05, letterSpacing: "-0.02em" }],
        "display-1": [fluid(34, 68), { lineHeight: 1.08, letterSpacing: "-0.01em" }],

        /* TITLES (map to semantic h1–h3) */
        "title-1": [fluid(28, 40), { lineHeight: 1.15, letterSpacing: "-0.01em" }],
        "title-2": [fluid(24, 32), { lineHeight: 1.2 }],
        "title-3": [fluid(20, 28), { lineHeight: 1.25 }],

        /* BODY */
        "body-xl": [fluid(18, 20), { lineHeight: 1.6 }],
        "body-lg": [rem(18), { lineHeight: 1.6 }],
        body: [rem(16), { lineHeight: 1.65 }],
        "body-sm": [rem(14), { lineHeight: 1.6 }],
        "body-xs": [rem(12), { lineHeight: 1.5 }],

        /* LABEL / OVERLINE */
        label: [rem(12), { lineHeight: 1.2, letterSpacing: "0.06em" }],
      },
    },
  },
  plugins: [],
};
