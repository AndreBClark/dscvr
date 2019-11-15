import { createGlobalStyle } from "styled-components"
import theme from "../../config/theme"

const GlobalStyle = createGlobalStyle`
html {
  min-height: 100%;
}
body {
  font-family: ${theme.fontFamily.sans};
  background-color: ${theme.colors.bg};
  box-sizing: border-box;
  margin: 0;
  font-size: ${theme.baseFontSize};
  line-height:1.6;
}
h1,h2,h3,h4,h5,h6 {
  font-weight: ${theme.fontFamily.headingWeight};
}

*::selection {
  background-color: ${theme.colors.primary};
  color: ${theme.colors.bg};
}

a {
	color: ${theme.colors.gray.dark};
    &:hover {
		color: ${theme.colors.primary.dark};
    }
}

a, button {
  transition: all ${props => props.theme.transitions.normal};
}
`
export default GlobalStyle
