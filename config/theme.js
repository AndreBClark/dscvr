import { lighten, darken } from "polished";

const colors = {
    primary: {
        normal: "#98bbd3",
        light: lighten(.2, this.normal),
        dark: darken(.2, this.normal),
    },
    secondary: {
        normal: "#fff88b",
        light: lighten(.2, this.normal),
        dark: darken(.2, this.normal),
    },
    tertiary: {
        normal: "#f697a2",
        light: lighten(.2, this.normal),
        dark: darken(.2, this.normal),
    },
    gray: {
        normal: "#888",
        light: lighten(.2, this.normal),
        dark: darken(.2, this.normal),
        darker: darken(.4, this.normal),
    },
    white: "#fff",
    softWhite: "#f2f2f2",

    success: {
        normal: "#d9ebd4",
        light: lighten(.2, this.normal),
        dark: darken(.2, this.normal),
    },

    warning: {
        normal: "#ffb141",
        light: lighten(.2, this.normal),
        dark: darken(.2, this.normal),
    },
    alert: {
        normal: "#941414",
        light: lighten(.2, this.normal),
        dark: darken(.2, this.normal),
    },
    royalPurple: "#dacee6",
    light: "#eee",
}
const fontFamily = {
    sans: `Helvetica, Roboto, sans-serif`,
    serif: `roboto_slab, serif`,
    monospace: `Consolas, "Liberation Mono", Courier, monospace`,
    headingCase: `capitalize`,
    headingWeight: `600`,
    logoCase: "uppercase",
}

const transitions = {
    normal: "0.5s",
}

const fontSize = {
    small: "0.9rem",
}


const breakpoints = {
    tablet: "1200px",
    phone: "600px",
}

const theme = {
    colors,
    transitions,
    fontFamily,
    breakpoints,
    letterSpacing: ".1em",
    radius: `1vmin`,
    border: ".4vmin",
    spacer: "0.5rem",
    maxWidth: `1280px`,
    baseFontSize: "calc(16px + (20 - 14) * ((100vw - 300px) / (1600 - 300)))",
}

export default theme