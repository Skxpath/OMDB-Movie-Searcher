import { MovieProps } from '../Types/Types';

function displayLabel(title: string) {
    console.log("display label for " + title);
}

type MovieInfoProps = {
    movie: MovieProps;
}

function MovieInfo({ movie }: MovieInfoProps) {
    return (
        <div>
            <p>Title: {movie.Title}</p>
            <p>Year: {movie.Year}</p>
            <p>IMDB ID: {movie.imdbID}</p>
            <img src={movie.Poster} alt="Movie poster"></img>
            <button onClick={() => displayLabel(movie.Title)}>Display Label for {movie.Title}</button>
        </div>
    );
}

export default MovieInfo;