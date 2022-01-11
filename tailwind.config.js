module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            width: {
                128: "26rem",
            },
        },
        screens: {
            LaptopL: "1440px",
            Laptop: "1024px",
            Tablet: "768px",
            MobileL: "425px",
            MobileM: "375px",
            MobileS: "320px",
        },
    },
    plugins: [],
};