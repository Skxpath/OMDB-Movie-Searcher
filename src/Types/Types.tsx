export type MovieProps = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export type OmdbSearchParameters = {
    Title: string;
    Year?: string;
    Type?: string;
}

export type OmdbSearchResults = {
    Search?: MovieProps[];
    totalResults?: string;
    Response?: string;
    Error?: string;
}
