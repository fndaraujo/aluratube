function SearchBar() {
    return (
        <div>
            <input
                type={'text'}
                placeholder={'Search video...'}
                onChange={(e) => {
                    //setSearchValue(e.target.value)
                }}
            />
            <button>?</button>
        </div>
    )
}

export default SearchBar
