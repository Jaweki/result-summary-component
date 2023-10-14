/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: '375px',
        Desktop: '1000px',
      },
      colors: {
        primary: {
          lightRed: 'hsl(0, 100%, 67%)',
          orangeyYellow: 'hsl(39, 100%, 56%)',
          greenTeal: 'hsl(166, 100%, 37%)',
          colbaltBlue: 'hsl(260, 85%, 45%)',
        }, 
        gradient: {
          // for the background
          lightSlateBlue: 'hsl(252, 100%, 67%)',
          lightRoyalBlue: 'hsl(241, 81%, 54%)',

          // for the cicle
          violetBlue: 'hsla(256, 72%, 46%, 1)',
          persianBlue: 'hsla(241, 72%, 46%, 0)',
        },
        neutral: {
            white: 'hsl(0, 0%, 100%)',
            paleBlue: 'hsl(221, 100%, 96%)',
            lightLavender: 'hsl(241, 100%, 89%)',
            darkGrayBlue: 'hsl(224, 30%, 27%)',
        },
      },
      fontSize: {
        bodyCopy: '18px',
      },
      fontWeight: {
        'medium': '500',
        'bold': '700',
        'extraBold': '800',
      },
      fontFamily: {
        hankenGrotesk: ['Hanken Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

