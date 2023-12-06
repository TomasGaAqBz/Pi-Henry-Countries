import { useState } from 'react'
import SearchBarStyle from './searchbar.module.css'

const SearchBar = ({ onSearch }) => {
    const [searchString, setSearchString] = useState('');

    // Maneja el cambio en el input de búsqueda.
    const handleChange = (e) => {
        e.preventDefault();
        const wantedString = e.target.value;
        setSearchString(wantedString);
        onSearch(wantedString);
    };

    return (
        <div className={SearchBarStyle.container}>
            <form className={SearchBarStyle.formcontainer}>
                <input
                    type="text"
                    className={SearchBarStyle.input}
                    onChange={handleChange}
                    placeholder="Search by name..."
                    value={searchString}
                />
                <button className={SearchBarStyle.button}>Search</button>
            </form>
        </div>
    );
};

export default SearchBar;