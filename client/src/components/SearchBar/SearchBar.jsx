import SearchBarStyle from './searchbar.module.css'

const SearchBar = () =>{

    return(
        <div className={SearchBarStyle.container}>
            <form>
                <input type="text" placeholder="Search by name..." />
                <button>*</button>
            </form>
        </div>
    )
}

export default SearchBar