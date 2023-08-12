import { MovieProps, OmdbSearchResults } from "../Interfaces/Interfaces";
import { OmdbSearchParameters } from "../Interfaces/Interfaces";

const apiKey: string | undefined = process.env.REACT_APP_OMDB_API_KEY;
const apiUrl: string = 'https://www.omdbapi.com/';
    
let dummy: MovieProps[] = [   
    {
        "Title": "omdb Search Transformers",
        "Year": "2007",
        "imdbID": "tt0418279",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNWI1NjkxM2MtOTU4My00YzQ5LTliNGMtNmFlM2U5NWM3MDY1XkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"
    },
    {
        "Title": "Setter Transformers: Dark of the Moon",
        "Year": "2011",
        "imdbID": "tt1399103",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ@@._V1_SX300.jpg"
}];

const getApiKey = (): string => {
    const apiKeyFromEnv: string | undefined = process.env.REACT_APP_OMDB_API_KEY;
    if (apiKeyFromEnv !== undefined) {
        return apiKeyFromEnv;
    } else {
        return "";
    }
}

const requestParser = (params: OmdbSearchParameters): string => {
    let requestString = apiUrl;
    console.log(params);
    console.log(params.Title);

    requestString += "?apikey=" + getApiKey();
    if (params.Title) requestString += "&s=" + params.Title;
    if (params.Year) requestString += "&y=" + params.Year;

    console.log(requestString);
    return requestString;
}
export const omdbSearchRequest = async <OmdbSearchResults>(params: OmdbSearchParameters): Promise<OmdbSearchResults> => {
    console.log("omdbSearchRequest: " + params);
    console.log(apiKey);
    console.log(requestParser(params));

    let result = await fetch(requestParser(params));
    return await result.json();
}