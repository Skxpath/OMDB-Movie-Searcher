import { omdbSearchRequest } from '../Api/omdbRequests';
import { useState, useEffect, useCallback } from 'react';
import { MovieProps, OmdbSearchParameters, OmdbSearchResults } from '../Types/Types';
import config from "../config.json";

const WAITING_FOR_SEARCH: string = "Waiting for search...";
const SEARCHING: string = "Searching...";
const SEARCH_SUCCESSFUL: string = "Search successful! Total results found: "; 
const ERROR_SEARCHING: string = "Error searching movie info: ";
const CLEARED_SEARCH: string = "Cleared search results";
const MOVIE_NAME_PLACEHOLDER: string = "Search movie by name";
const MOVIE_YEAR_PLACEHOLDER: string = "Enter movie year (optional)";

const TYPE_MOVIE: string = "movie";

let getData: NodeJS.Timeout;

type SearchBarProps = {
    setMovieInfo: React.Dispatch<React.SetStateAction<MovieProps[]>>
}

function SearchBar({ setMovieInfo }: SearchBarProps) {
    const [movieName, setMovieName] = useState("");
    const [movieYear, setMovieYear] = useState("");
    const [searchStatusText, setSearchStatusText] = useState(WAITING_FOR_SEARCH);

    const debounceSearchDelay: number = config.debounceSearchDelay || 2000;

    const handleMovieNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setMovieName(e.currentTarget.value);
    };

    const handleMovieYearChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setMovieYear(e.currentTarget.value);
    };

    const searchForMovies = useCallback(async () => {
        const result = await omdbSearchRequest(createSearchParameters(movieName, movieYear)) as OmdbSearchResults;

        if (result.Response === "True" && result.Search) {
            setMovieInfo(result.Search);
            setSearchStatusText(SEARCH_SUCCESSFUL + result.totalResults);
        } else {
            setSearchStatusText(ERROR_SEARCHING + result.Error);
        }
    }, [movieName, movieYear, setMovieInfo]);

    const createSearchParameters = (movieName: string, movieYear: string): OmdbSearchParameters => (
        {
            Title: movieName,
            Type: TYPE_MOVIE,
            ...(movieYear ? { Year: movieYear } : {})
        }
    );

    const clearSearchResults = () => {
        setMovieInfo([]);
        setSearchStatusText(CLEARED_SEARCH);
        setMovieName("");
        setMovieYear("");
    }

    useEffect(() => {
         getData = setTimeout(() => {
            if (movieName) {
                setSearchStatusText(SEARCHING);
                searchForMovies();
            } else {
                setSearchStatusText(WAITING_FOR_SEARCH);
            }
        }, debounceSearchDelay)

        return () => clearTimeout(getData);
    }, [movieName, movieYear, searchForMovies, debounceSearchDelay])

    const onSubmitMovieSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        clearTimeout(getData);
        setSearchStatusText(SEARCHING);
        searchForMovies();
    }

    return (
        <div>
        <form onSubmit={onSubmitMovieSearch}>
            <input
                type="movieName"
                placeholder={MOVIE_NAME_PLACEHOLDER}
                onChange={handleMovieNameChange}
                value={movieName} />
            <input
                type="movieYear"
                placeholder={MOVIE_YEAR_PLACEHOLDER}
                onChange={handleMovieYearChange}
                value={movieYear} />
            <input type="submit" hidden />
        </form>
            <button onClick={clearSearchResults}>Clear</button>
            <p>{searchStatusText}</p>         
        </div>
    );
}

export default SearchBar;