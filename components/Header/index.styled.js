import styled from 'styled-components'

import appConfig from 'aluratube.config.json'

const StyledHeader = styled.div`
    background-color: ${({ theme }) =>
        theme.backgroundLevel1 || appConfig.themes.light.backgroundLevel1};
    img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 1rem 2rem;
        gap: 1rem;
        .user-name {
            text-transform: uppercase;
        }
        .user-description {
            text-transform: capitalize;
        }
    }
`

export default StyledHeader
