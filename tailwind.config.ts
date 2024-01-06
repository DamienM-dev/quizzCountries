import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        bg_app: "#FDF7F5",
        bg_ui: "#F6EDEA",
        bg_hover: "#EFE4DF",
        border: "#DFCDC5",
        border_hover: "#C2A499",
        text: "#43302B",
        timerGood: "#46A758",
        timerBad: "#E5484D",
        bg_button: "#7D5E54",
        border_button: "##D3BCB3",
      },
    },
  },
  plugins: [],
} satisfies Config;
