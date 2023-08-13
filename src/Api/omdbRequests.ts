import { OmdbSearchParameters } from "../Types/Types";
import config from "../config.json";

const apiUrl: string = config.apiUrl;

export const omdbSearchRequest = async (params: OmdbSearchParameters) => {
    let queryString: URL = new URL(apiUrl);

    const apiKey = process.env.REACT_APP_OMDB_API_KEY;

    if (!apiKey) {
        return {
            "Response": "False",
            "Error": "No API key defined in .env!"
        }
    }

    queryString.searchParams.set('apikey', apiKey);

    if (params.Title) queryString.searchParams.set('s', params.Title);
    if (params.Year) queryString.searchParams.set('y', params.Year);
    if (params.Type) queryString.searchParams.set('type', params.Type);

    const result = await fetch(queryString);

    return await result.json();
}