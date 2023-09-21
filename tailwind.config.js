/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}", "./node_modules/flowbite/**/*.js"],
    theme: {
        colors:
            {
                'verde':'#D1FFEC',
                'violac':'#9999FF',
                'violas':'#36174C',
            },
        screens: {
            'sm': '767px',  // Dispositivi Mobile
            'md': '1194px', // Dispositivi Tablet
            'lg': '1194px', // Dispositivi Desktop
            'xl': '1900px' //dispositivi grandi
        },
        spacing: {
            '0.5': '0.5rem',
            '1': '1rem',
            '1.5': '1.5rem',
            '2': '2rem',
            '3': '3rem',
            '4': '4rem',
            '5': '5rem',
            '6': '6rem',
            '7': '7rem',
            '8': '8rem',

        },
        fontFamily: {
            'corpo': ['"Worksans"','"Arial"','sans-serif'],
            'head' : ['"Cascadia"','"Arial"','sans-serif'],
        },
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
}

