/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
   return ({ opacityValue }) => {
      if (opacityValue !== undefined) {
         return `rgba(var(${variableName}), ${opacityValue})`
      } else {
         return `rgba(var(${variableName}))`
      }
   }
}

module.exports = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         screens: {
            xsPhone: '320px',
            smPhone: '360px',
            lgPhone: '400px',
            xlPhone: '440px',
            smTablet: '540px',
            baseTablet: '760px',
            lgTablet: '980px',
            baseLaptop: '1020px',
            desktop: '1440px',
         },
         colors: {
            skin: {
               'theme-50': withOpacity('--theme-50'),
               'theme-100': withOpacity('--theme-100'),
               'theme-200': withOpacity('--theme-200'),
               'theme-300': withOpacity('--theme-300'),
               'theme-400': withOpacity('--theme-400'),
               'theme-500': withOpacity('--theme-500'),
               'theme-600': withOpacity('--theme-600'),
               'theme-700': withOpacity('--theme-700'),
               'theme-800': withOpacity('--theme-800'),
               'theme-900': withOpacity('--theme-900'),
               'theme-950': withOpacity('--theme-950'),
            },
            backgroundImage: {
               // "footer-image": "url('/Images/footer.png')",
            },
         },
         fontFamily: {
            helvatice: 'HelvaticeNeue',
            jiho: 'Jiho',
            figtree: ['Figtree', 'sans-serif'],
            gloock: ['Gloock', 'serif'],
            inconsolata: ['Inconsolata', 'monospace'],
            jost: ['Jost', 'sans-serif'],
            montserrat: ['Montserrat', 'sans-serif'],
            openSans: ['Open Sans', 'sans-serif'],
            plexSerif: ['IBM Plex Serif', 'serif'],
            radio: ['Radio Canada', 'sans-serif'],
            roboto: ['Roboto Flex', 'sans-serif'],
            spaceGrotesk: ['Space Grotesk', 'sans-serif'],
            splineSansk: ['Spline Sans', 'sans-serif'],
         },
      },
   },
   plugins: [],
}
