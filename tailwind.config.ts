import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      text: "#cdd6f4",
      subtext: "#a6adc8",
      lavender: "#b4befe",
      base: "#1e1e2e",
      mantle: "#181825",
      crust: "#11111b",
      blue: "#89b4fa",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto"],
        mono: ["Iosevka"],
      },
    },
  },
  plugins: [typography],
} satisfies Config;
