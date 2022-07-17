module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
      xs: "clamp(0.7rem, 0.66rem + 0.2vw, 0.8rem)",
      sm: "clamp(0.88rem, 0.83rem + 0.24vw, 1rem)",
      base: "clamp(1.09rem, 1rem + 0.47vw, 1.33rem)",
      lg: "clamp(1.37rem, 1.21rem + 0.8vw, 1.78rem)",
      xl: "clamp(1.71rem, 1.45rem + 1.29vw, 2.37rem)",
      "2xl": "clamp(2.14rem, 1.74rem + 1.99vw, 3.16rem)",
      "3xl": "clamp(2.67rem, 2.07rem + 3vw, 4.21rem)",
      "4xl": "clamp(3.34rem, 2.45rem + 4.43vw, 5.61rem)",
    },
    listStyleType: {
      decimal: "decimal",
      none: "decimal",
    },
  },
  plugins: [],
};
