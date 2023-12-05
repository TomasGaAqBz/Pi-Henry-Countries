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
            <form>
                <input
                    type="text"
                    onChange={handleChange}
                    placeholder="Search by name..."
                    value={searchString}
                />
                <button>*</button>
            </form>
        </div>
    );
};

export default SearchBar;