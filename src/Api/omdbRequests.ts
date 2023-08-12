import { MovieProps, OmdbSearchResults } from "../Interfaces/Interfaces";
import { OmdbSearchParameters } from "../Interfaces/Interfaces";
import config from "../config.json";

const apiKey: string | undefined = process.env.REACT_APP_OMDB_API_KEY;
const apiUrl: string = config.apiUrl;

const getApiKey = (): string => {
    const apiKeyFromEnv: string | undefined = process.env.REACT_APP_OMDB_API_KEY;
    if (apiKeyFromEnv !== undefined) {
        return apiKeyFromEnv;
    } else {
        return "";
    }
}

const requestParser = (params: OmdbSearchParameters): string => {
    let requestString: string = apiUrl;

    requestString += "?apikey=" + getApiKey();
    if (params.Title) requestString += "&s=" + params.Title;
    if (params.Year) requestString += "&y=" + params.Year;

    return requestString;
}
export const omdbSearchRequest = async <OmdbSearchResults>(params: OmdbSearchParameters): Promise<OmdbSearchResults> => {
    console.log("omdbSearchRequest: " + params);
    console.log(apiKey);
    console.log(requestParser(params));

    let result = await fetch(requestParser(params));
    return await result.json();
}