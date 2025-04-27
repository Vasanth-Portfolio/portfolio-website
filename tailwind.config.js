import colors from "tailwindcss/colors";

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const darkMode = "class";
export const theme = {
  extend: {
    colors: {
      "primary-light": "#F7F8FC",
      "secondary-light": "#FFFFFF",
      "ternary-light": "#f6f7f8",

      "primary-dark": "#0D2438",
      "secondary-dark": "#102D44",
      "ternary-dark": "#1E3851",
      
      "accent-light": "#4F46E5",
      "accent-dark": "#6366F1",
    },
    boxShadow: {
      'soft': '0 4px 14px 0 rgba(0, 0, 0, 0.08)',
      'hard': '0 4px 20px 0 rgba(0, 0, 0, 0.12)',
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "5rem",
        xl: "6rem",
        "2xl": "8rem",
      },
    },
    animation: {
      "fade-in": "fadeIn 0.3s ease-in-out",
      "toast-in": "toastIn 0.3s ease-out",
      "toast-out": "toastOut 0.3s ease-in",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: "0", transform: "translateY(10px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      toastIn: {
        "0%": { transform: "translateY(100%)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      toastOut: {
        "0%": { transform: "translateY(0)", opacity: "1" },
        "100%": { transform: "translateY(100%)", opacity: "0" },
      },
	  toastInLeft: {
		'0%': { transform: 'translateX(-100%)' },
		'100%': { transform: 'translateX(0)' },
	  },
    },
  },
};
export const variants = {
  extend: { opacity: ["disabled"] },
};
export const plugins = ["@tailwindcss/forms"];
