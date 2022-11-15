import styled from 'styled-components'

import appConfig from 'aluratube.config.json'

const StyledMenu = styled.header`
    display: flex;
    flex-direction: row;
    height: 4rem;
    justify-content: space-between;
    background-color: ${({ theme }) =>
        theme.backgroundLevel1 || appConfig.themes.light.backgroundLevel1};
    border: 1px solid
        ${({ theme }) => theme.borderBase || appConfig.themes.light.borderBase};
    align-items: center;
    padding: 0 1rem;
    gap: 1rem;
    position: fixed;
    width: 100%;
`
export default StyledMenu
