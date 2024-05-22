import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00f0ff",
        "smooth-white": "#f9f9f9",
        "smooth-black": "#111111",
      },
      keyframes: {
        expansion: {
          from: { transform: "scale(100%)" },
          to: { transform: "scale(6000%)" },
        },
        contraction: {
          from: { transform: "scale(6000%)" },
          to: { transform: "scale(100%)" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateX(-25vw)" },
          to: { opacity: "1", transform: "translateX(0)"  },
        },
        "fade-out": {
          from: { opacity: "1", transform: "translateX(0)"  },
          to: { opacity: "0", transform: "translateX(-25vw)", display: "none"  },
        },
      },
      animation: {
        expand: "expansion 0.5s ease-in-out forwards",
        contract: "contraction 0.5s ease-in-out forwards",
        "fade-in": "fade-in 0.75s ease-in-out forwards",
        "fade-out": "fade-out 0.25s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
