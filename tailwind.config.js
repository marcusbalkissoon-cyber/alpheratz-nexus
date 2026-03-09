/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                oled: '#000000',
                cyan: '#00F0FF',
                gray: {
                    800: '#1a1a1a',
                    900: '#888888',
                }
            },
            fontFamily: {
                mono: ['Space Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
            },
        },
    },
    plugins: [],
}
