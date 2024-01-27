import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bannerInit': "url('/bannerInit.svg')",
      },
      colors: {
        'primary': '#014034',
        'primary-2': '#02735E',
        'primary-3': '#0D0D0D',
        'primary-4': '#0D0D0D50',
        'primary-5': '#14D9B3',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
export default config;
