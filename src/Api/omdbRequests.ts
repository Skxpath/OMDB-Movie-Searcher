import { OmdbSearchParameters } from "../Types/Types";
import config from "../config.json";

const apiUrl: string = config.apiUrl;

const getApiKey = (): string => {
    const apiKeyFromEnv: string | undefined = process.env.REACT_APP_OMDB_API_KEY;
    if (apiKeyFromEnv !== undefined) {
        return apiKeyFromEnv;
    } else {
        return "";
    }
}

export const omdbSearchRequest = async (params: OmdbSearchParameters) => {
    let queryString: URL = new URL(apiUrl);

    let apiKey: string = getApiKey();

    if (apiKey === "") {
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