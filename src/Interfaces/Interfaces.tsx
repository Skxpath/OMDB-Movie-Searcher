export interface MovieProps {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface OmdbSearchParameters {
    Title: string;
    Year?: string;
}

export type OmdbSearchResults = {
    Search: MovieProps[];
    totalResults: string;
    Response: string;
}