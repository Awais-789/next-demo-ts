import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@shadcn-ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#EFEFEF',
        secondary: '#D9D9D9',
        primary: '#000000',
        accent: '#FBD54E',
      },
      fontFamily: {
        'basic-commercial': ['var(--font-basic-commercial)'],
        'poppins': ['var(--font-poppins)'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;


