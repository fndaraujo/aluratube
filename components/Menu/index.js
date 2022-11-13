import SearchBar from '@/components/Menu/searchbar'

import appConfig from '@/aluratube.config.json'

function Menu() {
    return (
        <div>
            {appConfig.app.product}
            <SearchBar />
        </div>
    )
}

export default Menu
