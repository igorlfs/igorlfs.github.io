import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const text = '#cdd6f4';
const subtext = '#a6adc8';

const lavender = '#b4befe';

const base = '#1e1e2e';
const mantle = '#181825';
const crust = '#11111b';

const blue = '#89b4fa';

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        colors: {
            primary: lavender,
            accent: blue,
            text,
            subtext,
            lavender,
            base,
            mantle,
            crust,
            blue
        },
        extend: {
            fontFamily: {
                sans: ['Roboto'],
                mono: ['Iosevka']
            }
        }
    },
    plugins: [typography]
} satisfies Config;
