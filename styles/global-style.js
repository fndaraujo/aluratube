import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    // Reset default css configuration.
    html {
        box-sizing: border-box;
        font-size: 16px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body, h1, h2, h3, h4, h5, h6, p, ol, ul {
        padding: 0;
        font-weight: normal;
        margin: 0;
    }
    ol, ul {
        list-style: none;
    }
    img {
        max-width: 100%;
        height: auto;
    }
`
export default GlobalStyle
