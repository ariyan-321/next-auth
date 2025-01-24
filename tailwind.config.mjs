/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // You can define this CSS variable elsewhere in your app
        foreground: "var(--foreground)", // You can define this CSS variable elsewhere in your app
        primary: '#ff6347',  // Custom primary color
        secondary: '#4b8b3b', // Custom secondary color
        accent: '#ff69b4',    // Custom accent color
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: { // Custom theme name
          "base-100": "#ffffff", // Example background color (white)
        },
      },
      // You can add more themes or use DaisyUI's built-in themes
      'light',
    ],
  },
};
