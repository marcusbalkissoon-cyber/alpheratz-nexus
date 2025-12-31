/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                obsidian: '#050505',
                gold: '#FFD700',
            },
            fontFamily: {
                rajdhani: ['Rajdhani', 'sans-serif'],
                manrope: ['Manrope', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
