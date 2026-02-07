// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{vue,js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         // Based on your reference image:
//         'chhab-bg': '#F3F4F6',
//         'chhab-primary': '#3B82F6',
//         'chhab-card': '#FFFFFF',
//         'chhab-text-bold': '#111827',
//         'chhab-text-muted': '#6B7280',
//       },
//       borderRadius: {
//         'xl': '12px',
//         '2xl': '16px',
//       }
//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This sets Poppins as the primary sans-serif font
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'chhab-bg': '#F3F4F6',
        'chhab-primary': '#3B82F6',
        'chhab-card': '#FFFFFF',
        'chhab-text-bold': '#111827',
        'chhab-text-muted': '#6B7280',
      },
    },
  },
  plugins: [],
}
