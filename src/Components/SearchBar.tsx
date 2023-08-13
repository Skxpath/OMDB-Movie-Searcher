import { omdbSearchRequest } from '../Api/omdbRequests';
import { useState, useEffect, useCallback } from 'react';
import { MovieProps, OmdbSearchParameters, OmdbSearchResults } from '../Types/Types';

const createSearchParameters = (movieName: string, movieYear: string): OmdbSearchParameters =>(
    {
        Title: movieName,
        Type: 'movie',
        ...(movieYear ? { Year: movieYear } : {})
    }
);

type SearchBarProps = {
    setMovieInfo: React.Dispatch<React.SetStateAction<MovieProps[]>>
}

function SearchBar({ setMovieInfo }: SearchBarProps) {
    const [movieName, setMovieName] = useState("");
    const [movieYear, setMovieYear] = useState("");
    const [searchStatusText, setSearchStatusText] = useState("Waiting for search...");

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

        if (result.Response === "True" && result.Search !== undefined) {
            setMovieInfo(result.Search);
            setSearchStatusText("Search successful! Total results found: " + result.totalResults);
        } else {
            setSearchStatusText("Error searching movie info - " + result.Error);
        }
    },[movieName, movieYear, setMovieInfo]);

    const clearSearchResults = () => {
        setMovieInfo([]);
        setSearchStatusText("Cleared search results");
        setMovieName("");
        setMovieYear("");
    }
    
    useEffect(() => {
        const getData = setTimeout(() => {
            if (movieName) {
                searchForMovies();
            } else {
                setSearchStatusText("Waiting for search...");
            }
        }, 2000)

        return () => clearTimeout(getData);
    }, [movieName, movieYear, searchForMovies])

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
            <button onClick={clearSearchResults}>Clear</button>
            <p>{searchStatusText}</p>
        </div>
    );
}

export default SearchBar;