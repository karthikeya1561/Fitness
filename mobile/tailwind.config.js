/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: "#13ec5b",
                "background-light": "#f6f8f6",
                "background-dark": "#102216",
                "surface-dark": "#193322",
                "border-dark": "#23482f",
            },
            fontFamily: {
                display: ["Lexend", "sans-serif"],
                sans: ["Lexend", "sans-serif"],
            },
        },
    },
    plugins: [],
}
