/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // primary colors
        "ds-beige-500": "#98908B",
        "ds-beige-100": "#F8F4F0",
        "ds-grey-900": "#201F24",
        "ds-grey-500": "#696868",
        "ds-grey-300": "#B3B3B3",
        "ds-grey-100": "#F2F2F2",
        // secondary colors
        "ds-green": "#277C78",
        "ds-yellow": "#F2CDAC",
        "ds-cyan": "#82C9D7",
        "ds-navy": "#626070",
        "ds-red": "#C94736",
        "ds-purple": "#826CB0",
        // other colors
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-[#277C78]',
    'bg-[#82C9D7]',
    'bg-[#F2CDAC]',
    'bg-[#626070]',
    'bg-[#826CB0]',
  ]
}