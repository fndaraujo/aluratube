import styled from 'styled-components'

const StyledBanner = styled.div`
    background-image: url(${({ bannerUrl }) => bannerUrl});
    background-position: bottom right;
    height: 25rem;
`

export default StyledBanner
