module.exports = {
  purge: {
    mode: 'production',
    content: ['./src/**/*.html'],
  },
  theme: {
    extend: {
      colors: {
        'bright-red': '#F24E1E',
        'deep-purple': '#5551FF',
      },
    },
  },
  variants: {},
  plugins: [],
};
