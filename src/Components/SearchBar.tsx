import { useState } from 'react';
import { omdbSearchRequest } from '../Api/requestHandlers';

function SearchBar() {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e: any) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    return (
        <div>
            <input
                type="search"
                placeholder="Search movie here"
                onChange={handleChange}
                value={searchInput} />
            <button onClick={() => omdbSearchRequest(searchInput)}>Search</button>
        </div>
    );
}

export default SearchBar;