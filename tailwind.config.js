/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],

    theme: {
        extend: {
            screens: {
                'mobile-md': { min: '0px', max: '599px' },

                sm: '600px',
                // => @media (min-width: 640px) { ... }

                md: '768px',
                // => @media (min-width: 768px) { ... }

                lg: '1024px',
                // => @media (min-width: 1024px) { ... }

                xl: '1280px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
            },
            height: {
                'custom-300': '300px',
                'custom-550': '550px',
                'custom-350': '350px',
                'screen-50': '50vh',
            },
            backgroundSize: {
                'custom-100': '500px',
            },
            colors: {
                'white-opacity': 'rgba(255,255,255,0.8)',
            },
        },
    },

    plugins: [require('daisyui')],
};
