import StyledSearchBar from 'components/Menu/searchbar.styled'

function SearchBar() {
    return (
        <StyledSearchBar>
            <input
                type={'text'}
                placeholder={'Search video...'}
                onChange={(e) => {
                    //setSearchValue(e.target.value)
                }}
            />
            <button>?</button>
        </StyledSearchBar>
    )
}

export default SearchBar
