/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', /* src folder, for example */
            'node_modules/flowbite/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin'),
            require('daisyui')],
  daisyui: {
    themes: ["light"]
  },
};
