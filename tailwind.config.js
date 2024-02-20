/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                dark: '#1c1d1d',
                light: '#5e87b5',
                primary: '#294769',
                contrast: '#34444b',
                foreground: '#c2ddf4',
                gray: '#646c81',
            },
        },
    },
    plugins: [],
};
