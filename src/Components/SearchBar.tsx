import { omdbSearchRequest } from '../Api/omdbRequests';
import { useState, useContext } from 'react';
import { MovieContext, MovieContextInterface } from '../App/App';
import { OmdbSearchParameters, OmdbSearchResults } from '../Types/Types';

function SearchBar() {
    const [movieName, setMovieName] = useState("");
    const [movieYear, setMovieYear] = useState("");
    const [searchStatusText, setSearchStatusText] = useState("Waiting for search...");
    const { movieInfo, setMovieInfo } = useContext<MovieContextInterface>(MovieContext);

    const handleMovieNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setMovieName(e.currentTarget.value);
    };

    const handleMovieYearChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setMovieYear(e.currentTarget.value);
    };

    const createSearchParameters = (): OmdbSearchParameters => {
        let params: OmdbSearchParameters = {
            Title: movieName,
        };

        if (movieYear !== "") {
            params.Year = movieYear;
        }

        //Hard coded to currently only display movies
        params.Type = 'movie';

        return params;
    }

    const searchForMovies = async () => {
        let result = await omdbSearchRequest(createSearchParameters()) as OmdbSearchResults;
        console.log(result);

        if (result.Response === "True" && result.Search !== undefined) {
            setMovieInfo(result.Search);
            setSearchStatusText("Search successful! Total results found: " + result.totalResults);
        } else {
            setSearchStatusText("Error searching movie info - " + result.Error);
        }
    };

    const clearSearchResults = () => {
        setMovieInfo([]);
        setSearchStatusText("Cleared search results");
    }

    return (
        <div>
            <input
                type="movieName"
                placeholder="Search movie by name"
                onChange={handleMovieNameChange}
                value={movieName} />
            <input
                type="movieYear"
                placeholder="Enter movie year (optional)"
                onChange={handleMovieYearChange}
                value={movieYear} />
            <button onClick={() => searchForMovies()}>Search</button>
            <button onClick={() => clearSearchResults()}>Clear search results</button>
            <p>{searchStatusText}</p>
        </div>
    );
}

export default SearchBar;