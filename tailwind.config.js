/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xxxl: { max: '3019px' },
      xxl: { max: '2560px' },
      xl: { max: '1920px' },
      'desktop-l': { max: '1880px' },
      'desktop-m': { max: '1680px' },
      'laptop-x': { max: '1440px' },
      'laptop-m': { max: '1280px' },
      lg: { max: '1170px' },
      md: { max: '991px' },
      sm: { max: '767px' },
      xs: { max: '414px' },
      xxs: { max: '375px' },
      '2xl': '1921px',
      DEFAULT: '1280px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '26px',
        xxl: '3rem',
        xl: '3rem',
        lg: '3rem',
        md: '30px',
        sm: '18px',
        xs: '15px',
      },
    },
    fontFamily: {
      primary: ['Manrope', 'sans-serif'],
      secondary: ['Onest', 'sans-serif'],
      accent: ['Manrope', 'sans-serif'],
    },
    fontSize: {
      'primary-heading': '30px',
      'secondary-heading': '26px',
      'accend-heading': '22px',
      'body-text': '16px',
      'body-secondary-text': '18px',
      'accend-text': '14px',
    },
    extend: {
      colors: {
        'primary-color': '#272727',
        'secondary-color': '#626262',
        'accend-color': '#0064A6',
        'accend-color-2': '#858585',
        'accend-color-3': '#009692',
        'accend-color-4': '#EBEBEB',
        'uwc-white': '#fff',
        'uwc-body': '#F9F9F9',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
