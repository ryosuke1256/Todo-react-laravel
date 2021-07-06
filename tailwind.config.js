const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./resources/views/index.blade.php", "./resources/ts/App.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "customColor": "#d1d1ff", //prettier-ignore
            },
            margin: {
                '16.5': "68px", //prettier-ignore
            },
            height: {
                pc: "600px",
                sp: "480px",
            },
            inset: {
                520: "520px",
                650: "650px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
