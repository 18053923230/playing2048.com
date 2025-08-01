/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // 自定义游戏主题颜色
        cupcake: {
          50: '#fdf6e3',
          100: '#f0e68c',
          200: '#ff69b4',
          300: '#8b4513',
          400: '#4169e1',
          500: '#ffff00',
          600: '#ffa500',
          700: '#98fb98',
          800: '#d2691e',
          900: '#dc143c',
        },
        christmas: {
          50: '#f0f8ff',
          100: '#90ee90',
          200: '#ff0000',
          300: '#228b22',
          400: '#ff69b4',
          500: '#ffd700',
          600: '#ffa500',
          700: '#8b4513',
          800: '#ffffff',
          900: '#00ffff',
        },
        halloween: {
          50: '#2f2f2f',
          100: '#8b4513',
          200: '#ffffff',
          300: '#8b0000',
          400: '#800080',
          500: '#f5f5dc',
          600: '#696969',
          700: '#228b22',
          800: '#ff8c00',
          900: '#000000',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // 游戏相关动画
        "tile-appear": {
          "0%": { 
            opacity: "0", 
            transform: "scale(0.5) rotate(180deg)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "scale(1) rotate(0deg)" 
          },
        },
        "tile-merge": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        "tile-slide": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(var(--slide-distance))" },
        },
        "score-bounce": {
          "0%, 20%, 53%, 80%, 100%": { transform: "translate3d(0,0,0)" },
          "40%, 43%": { transform: "translate3d(0,-30px,0)" },
          "70%": { transform: "translate3d(0,-15px,0)" },
          "90%": { transform: "translate3d(0,-4px,0)" },
        },
        "game-won": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "tile-appear": "tile-appear 0.3s ease-out",
        "tile-merge": "tile-merge 0.2s ease-out",
        "tile-slide": "tile-slide 0.15s ease-out",
        "score-bounce": "score-bounce 1s ease-out",
        "game-won": "game-won 0.5s ease-out",
      },
      // 自定义间距
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // 自定义字体大小
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      // 自定义阴影
      boxShadow: {
        'game-tile': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'game-board': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'game-overlay': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 