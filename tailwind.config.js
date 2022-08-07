/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./views/**/*.art"],
    theme: {
        extend: {},
    },
    plugins: [
        require('tailwind-scrollbar'),
    ],
    variants: {
        scrollbar: ['dark']
    }
}
