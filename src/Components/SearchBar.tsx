import { omdbSearchRequest } from '../Api/requestHandlers';
import { useState, useContext } from 'react';
import { MovieContext, iMovieContext } from '../App/App';

function SearchBar() {
    const [searchInput, setSearchInput] = useState("");
    const { movieInfo, setMovieInfo } = useContext<iMovieContext>(MovieContext);

    const handleChange = (e: any) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    const searchForMovies = async (searchInput: string) => {
        try {
        let result = await omdbSearchRequest(searchInput);
        console.log("searchForMovies result: ");
        console.log(result);

        setMovieInfo(result)
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <input
                type="search"
                placeholder="Search movie here"
                onChange={handleChange}
                value={searchInput} />
            <button onClick={() => searchForMovies(searchInput)}>Search</button>
        </div>
    );
}

export default SearchBar;