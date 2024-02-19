/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        fontFamily: {
            display: ["sans-serif"],
            body: ["sans-serif"],
        },
        extend: {
            colors: {
                "dark-blue": "#03486B",
                "main-bg": "#255F74",
                "main-blue": "#428AA2",
                "secondary-blue": "#9DC6C2",
                "light-blue": "#AFD8DC",
                cream: "#F9F4E8",
            },
            fontSize: {
                14: "14px",
            },
            backgroundColor: {
                "main-dark-bg": "#20232A",
                "secondary-dark-bg": "#33373E",
                "light-gray": "#F7F7F7",
                "half-transparent": "rgba(0, 0, 0, 0.5)",
            },
            borderWidth: {
                1: "1px",
            },
            borderColor: {
                color: "rgba(0, 0, 0, 0.1)",
            },
            height: {
                80: "80px",
            },
            minHeight: {
                590: "590px",
            },
        },
    },
    plugins: [require("daisyui")],
};
