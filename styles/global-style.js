import { createGlobalStyle } from 'styled-components'

import appConfig from 'aluratube.config.json'

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
    // Default application style.
    body {
        font-family: Arial, Helvetica, sans-serif;
        background-color: ${appConfig.themes.light.backgroundBase};
        color: ${appConfig.themes.light.textColorBase};
    }
    button, a {
        text-decoration: none;
        transition: .3s;
        &:hover,
        &:focus {
            opacity: .5;
        }
    }
`
export default GlobalStyle
