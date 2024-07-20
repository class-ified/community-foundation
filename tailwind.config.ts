import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: {
        DEFAULT: '#FFFFFF',
        70: 'rgba(255, 255, 255, 0.7)',
        80: 'rgba(255, 255, 255, 0.8)',
        50: 'rgba(255, 255, 255, 0.5)',
        60: 'rgba(255, 255, 255, 0.6)',
        20: 'rgba(255, 255, 255, 0.2)',
        10: 'rgba(255, 255, 255, 0.1)',
      },
      black: { DEFAULT: '#000000', 20: 'rgba(0, 0, 0, 0.2)' },
      gray: {
        DEFAULT: '#E5E5E5',
        light: '#DDE0E8',
        medium: '#54575A',
        dark: '#1D2130',
        darker: '#525560',
        10: '#F7F7F7',
        70: 'rgba(84, 87, 90, 0.7)',
        60: 'rgba(247, 247, 247, 0.6)',
        80: 'rgba(242, 242, 242, 0.8)',
        50: 'rgba(82, 85, 96, 0.8)',
        90: '#EEEEEE',
        100: '#505050',
      },
      blue: {
        light: '#5F52FF',
        medium: '#635BFF',
        dark: '#0087A7',
        navy: {
          DEFAULT: '#204150',
          20: 'rgba(0, 81, 242, 0.2)',
        },
        20: 'rgba(0, 135, 167, 0.2)',
      },
      green: {
        light: '#69FB8C',
        medium: '#096A56',
        dark: '#008A5C',
        70: 'rgba(105, 251, 156, 0.7)',
      },
      cyan: {
        light: '#ECEFF4',
        medium: '#ECFFFB',
        dark: { DEFAULT: '#EAFBF7', 20: 'rgba(234, 251, 247, 0.2)' },
      },
      pink: '#F4F2F4',
      red: '#FF5C5C',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        contentBody: '1240px',
      },
      margin: {
        contentXMargin: '100px',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
