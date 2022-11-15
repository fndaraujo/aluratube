import SearchBar from '@/components/Menu/searchbar'

import appConfig from '@/aluratube.config.json'

import StyledMenu from 'components/Menu/index.styled'

function Menu() {
    return (
        <StyledMenu>
            {appConfig.app.product}
            <SearchBar />
        </StyledMenu>
    )
}

export default Menu
