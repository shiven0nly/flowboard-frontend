/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#001428",
        sidebar: "#000f20",
        surface: "#001d36",
        "surface-elevated": "#0f2b46",
        accent: {
          DEFAULT: "#e0c1a0",
          hover: "#feddba",
          active: "#997e60",
        },
        text: {
          primary: "#d1e4ff",
          secondary: "#bac8dc",
          tertiary: "#768497",
        },
        border: {
          DEFAULT: "rgba(142,145,150,0.2)",
          strong: "rgba(142,145,150,0.4)",
        },
        success: "#4C9A72",
        warning: "#C7A252",
        danger: "#ffb4ab",
      },
      fontFamily: {
        sans: ["Hanken Grotesk", "sans-serif"],
        mono: ["IBM Plex Sans", "monospace"],
      },
      borderRadius: {
        'card': '8px',
        'modal': '8px',
      },
      boxShadow: {
        'skeuo-in': 'inset 0px 4px 6px rgba(0, 0, 0, 0.4), inset 0px -1px 2px rgba(255, 255, 255, 0.05)',
        'skeuo-out': '0px 4px 12px rgba(0, 0, 0, 0.3), inset 0px 1px 0px rgba(224, 193, 160, 0.1)',
        'skeuo-focus': '0 0 0 4px rgba(224, 193, 160, 0.2), inset 0px 4px 6px rgba(0, 0, 0, 0.4)',
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '56': '56px',
        '64': '64px',
        '260': '260px',
        '320': '320px',
        '400': '400px',
      }
    },
  },
  plugins: [],
}
