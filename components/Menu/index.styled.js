import styled from 'styled-components'

const StyledMenu = styled.header`
    display: flex;
    flex-direction: row;
    height: 4rem;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.backgroundLevel1 || '#FFFFFF'};
    border: 1px solid ${({ theme }) => theme.borderBase || '#e5e5e5'};
    align-items: center;
    padding: 0 1rem;
    gap: 1rem;
    position: fixed;
    width: 100%;
`
export default StyledMenu
