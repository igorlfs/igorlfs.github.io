/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        colors: {
            text: '#cdd6f4',
            subtext: '#a6adc8',
            surface: '#45475a',
            lavender: '#b4befe',
            base: '#1e1e2e',
            mantle: '#181825',
            crust: '#11111b',
            rosewater: '#f5e0dc',
            blue: '#89b4fa'
        },
        extend: {
            extend: {
                fontFamily: {
                    'sans': ['Roboto'],
                },
            },
        },
    },
    plugins: [
        // npm install tailwind-blip-ds
        // require('tailwind-blip-ds'),
    ]
}

