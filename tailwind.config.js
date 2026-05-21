/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 👈 এই লাইনটি অবশ্যই যোগ করুন
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // আপনার কাস্টম প্রিমিয়াম অ্যাপল-স্টাইল কালারস
      colors: {
        darkBg: '#0B0F19', // Deep Obsidian Black
        lightBg: '#F9FAFB', // Pure Soft White
      }
    },
  },
  plugins: [],
}