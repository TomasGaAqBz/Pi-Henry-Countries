import { useState } from 'react'
import SearchBarStyle from './searchbar.module.css'
import Home from '../../pages/Home/Home';

const SearchBar = ({ onSearch, setActualPage }) => {
    const [searchString, setSearchString] = useState('');

    // Maneja el cambio en el input de búsqueda.
    const handleChange = (e) => {
        e.preventDefault();
        const wantedString = e.target.value;
        setSearchString(wantedString);
        onSearch(wantedString);
        resetPage();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchString);
    };
    const resetPage = () => {
        setActualPage(1);
    };

    return (
        <div className={SearchBarStyle.container}>
            <form className={SearchBarStyle.formcontainer} onSubmit={handleSubmit}>
                <input
                    type="text"
                    className={SearchBarStyle.input}
                    onChange={handleChange}
                    placeholder="Search by name..."
                    value={searchString}
                />
                <button type="submit" className={SearchBarStyle.button}>
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;