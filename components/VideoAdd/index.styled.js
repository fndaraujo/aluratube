import styled from 'styled-components'

import appConfig from 'aluratube.config.json'

const VideoAddStyled = styled.div`
    .add-video {
        width: 4rem;
        height: 4rem;
        font-size: 2rem;
        color: inherit;
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        border: 0;
        background-color: red;
        border-radius: 50%;
        z-index: 99;
        cursor: pointer;
    }
    .close-modal {
        width: 2rem;
        height: 2rem;
        position: absolute;
        top: 0.5rem;
        right: 1rem;
        color: inherit;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    button[type='submit'] {
        background-color: red;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 2px;
        cursor: pointer;
        color: inherit;
    }
    form {
        width: 100%;
        padding: 5%;
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
        display: flex;
        justify-content: right;
        & > div {
            flex: 1;
            border-radius: 8px;
            max-width: 20rem;
            background-color: ${({ theme }) =>
                theme.backgroundLevel2 ||
                appConfig.themes.light.backgroundLevel2};
            display: flex;
            flex-direction: column;
            position: relative;
            padding: 1rem;
            padding-top: 3rem;
        }
    }
    input {
        border-radius: 2px;
        border: 1px solid
            ${({ theme }) =>
                theme.borderBase || appConfig.themes.light.borderBase};
        padding: 0.5rem 1rem;
        margin-bottom: 1rem;
        outline: none;
        color: #222222;
        background-color: #f9f9f9;
        color: ${({ theme }) =>
            theme.textColorBase || appConfig.themes.light.textColorBase};
        background-color: ${({ theme }) =>
            theme.backgroundBase || appConfig.themes.light.backgroundBase};
    }
`

export default VideoAddStyled
