/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#006190",
                "primary-container": "#2d7bac",
                "secondary": "#006d36",
                "secondary-container": "#83fba5",
                "tertiary": "#9e3d00",
                "background": "#f8f9fa",
                "surface": "#f8f9fa",
                "on-surface": "#191c1d",
                "outline": "#717786",
            },
            fontFamily: {
                headline: ["Manrope", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
}
