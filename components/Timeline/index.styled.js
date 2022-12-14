import styled from 'styled-components'

import appConfig from 'aluratube.config.json'

const StyledTimeline = styled.div`
    flex: 1;
    width: 100%;
    padding: 1rem;
    overflow: hidden;
    h3 {
        font-size: 1rem;
        margin-bottom: 1rem;
        text-transform: capitalize;
    }
    img {
        aspect-ratio: 16/9;
        font-weight: 500;
        object-fit: cover;
        width: 100%;
        max-width: 14rem;
        height: auto;
    }
    section {
        width: 100%;
        padding: 0;
        overflow: hidden;
        padding: 1rem;
        div {
            width: calc(100vw - 1rem * 4);
            display: grid;
            grid-gap: 1rem;
            grid-template-columns: repeat(auto-fill, minmax(12.5rem, 1fr));
            grid-auto-flow: column;
            grid-auto-columns: minmax(12.5rem, 1fr);
            overflow-x: scroll;
            scroll-snap-type: x mandatory;
            a {
                scroll-snap-align: start;
                span {
                    padding-top: 0.5rem;
                    display: block;
                    padding-right: 1.5rem;
                    color: ${({ theme }) =>
                        theme.textColorBase ||
                        appConfig.themes.light.textColorBase};
                }
            }
        }
    }
`

export default StyledTimeline
