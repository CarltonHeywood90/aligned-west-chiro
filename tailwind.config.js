module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'clinic-navy': '#1B2B3A',
        'clinic-off-white': '#F4F1EA',
        'clinic-gold': '#C5A059',
        'clinic-dark': '#1A1A1A',
        'clinic-gray': '#717171',
        'clinic-beige': '#F9F7F2',
      },
      fontFamily: {
        // map both utilities to Geller Headline for consistency
        sans: ['"Geller Headline"', 'Inter', 'sans-serif'],
        serif: ['"Geller Headline"', 'Playfair Display', 'serif'],
        display: ['"Geller Headline"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        clinic: '0 4px 20px -2px rgba(27, 43, 58, 0.05)',
      },
    },
  },
  plugins: [],
};