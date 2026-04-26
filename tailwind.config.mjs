/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta oficial Ecosunpower (extraída da logo renovada)
        primary: {
          50:  '#E6F7FD',
          100: '#CCEFFB',
          200: '#99DFF7',
          300: '#66CFF3',
          400: '#33BFEF',
          500: '#1FB8E8',  // Azul vibrante (cor principal)
          600: '#0E7CB8',  // Azul profundo (hover/dark)
          700: '#0B5A87',
          800: '#073E5C',
          900: '#04222F',
        },
        accent: {
          50:  '#FFF8E1',
          100: '#FFF0C2',
          200: '#FFE285',
          300: '#FFD449',
          400: '#FFCB30',
          500: '#FFC72C',  // Amarelo solar (CTAs, destaques)
          600: '#E5A800',  // Dourado escuro
          700: '#B38400',
          800: '#806000',
          900: '#4D3A00',
        },
        dark: {
          DEFAULT: '#0F172A',
          soft: '#1E293B',
        },
        muted: '#64748B',
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #1FB8E8 0%, #0E7CB8 60%, #0F172A 100%)',
        'gradient-sun': 'radial-gradient(circle at top right, #FFC72C 0%, transparent 60%)',
        'gradient-tech': 'linear-gradient(180deg, #F8FAFC 0%, #E6F7FD 100%)',
      },
      boxShadow: {
        'glow-primary': '0 0 40px rgba(31, 184, 232, 0.35)',
        'glow-accent': '0 0 30px rgba(255, 199, 44, 0.4)',
        'card': '0 4px 24px -8px rgba(15, 23, 42, 0.12)',
        'card-hover': '0 8px 32px -8px rgba(15, 23, 42, 0.2)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [typography],
};
