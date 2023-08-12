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
    let requestString: string = apiUrl;
    let apiKey: string = getApiKey();

    if (apiKey === "") {
        return {
            "Response": "False",
            "Error": "No API key defined in .env!"
        }
    }

    requestString += "?apikey=" + apiKey;

    if (params.Title) requestString += "&s=" + params.Title;
    if (params.Year) requestString += "&y=" + params.Year;
    if (params.Type) requestString += "&type=" + params.Type;

    console.log("omdbSearchRequest string: " + requestString);

    const result = await fetch(requestString);

    return await result.json();
}