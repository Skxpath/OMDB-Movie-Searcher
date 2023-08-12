import { omdbSearchRequest } from '../Api/omdbRequests';
import { useState, useContext } from 'react';
import { MovieContext, MovieContextInterface } from '../App/App';
import { OmdbSearchParameters, OmdbSearchResults } from '../Interfaces/Interfaces';

function SearchBar() {
    const [movieName, setMovieName] = useState<string>("");
    const [movieYear, setMovieYear] = useState<string>("");

    const { movieInfo, setMovieInfo } = useContext<MovieContextInterface>(MovieContext);

    const handleMovieNameChange = (e: any) => {
        e.preventDefault();
        setMovieName(e.target.value);
    };

    const handleMovieYearChange = (e: any) => {
        e.preventDefault();
        setMovieYear(e.target.value);
    };

    const createSearchParameters = (): OmdbSearchParameters => {
        let params: OmdbSearchParameters = {
            Title: movieName,
        };

        if (movieYear !== "") params.Year = movieYear;

        return params;
    }

    const searchForMovies = async () => {
        let result = await omdbSearchRequest(createSearchParameters()) as OmdbSearchResults;
        console.log("searchForMovies result: ");
        console.log(result);

        if (result.Response === "True") {
            setMovieInfo(result.Search);
        } else {
            console.log("Error! " + result);
        }
    };

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
        </div>
    );
}

export default SearchBar;