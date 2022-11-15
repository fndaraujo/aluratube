import styled from 'styled-components'

import appConfig from 'aluratube.config.json'

const StyledSearchBar = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid
        ${({ theme }) => theme.borderBase || appConfig.themes.light.borderBase};
    max-width: 26.5rem;
    width: 100%;
    border-radius: 2px;
    overflow: hidden;

    input {
        width: 80%;
        padding: 4px 6px;
        border: none;
        outline: none;
        color: ${({ theme }) =>
            theme.textColorBase || appConfig.themes.light.textColorBase};
        background-color: ${({ theme }) =>
            theme.backgroundBase || appConfig.themes.light.backgroundBase};
    }
    button {
        flex: 1;
        cursor: pointer;
        border: none;
        background-color: ${({ theme }) =>
            theme.backgroundLevel2 || appConfig.themes.light.backgroundLevel2};
        box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
        border-left: 1px solid
            ${({ theme }) =>
                theme.borderBase || appConfig.themes.light.borderBase};
        width: 40px;
        height: 40px;
        @media (min-width: 600px) {
            width: 64px;
            height: 40px;
        }
    }
`
export default StyledSearchBar
