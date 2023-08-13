import { MovieProps } from '../Types/Types';

const displayLabel = (title: string) => {
    console.log("display label for " + title);
}

type MovieInfoProps = {
    movie: MovieProps;
}

function MovieInfo({ movie }: MovieInfoProps) {
    return (
        <div className='movie-info'>
            <p>
                <span>Title:</span> <span>{movie.Title}</span>
                <span>Year: </span> <span>{movie.Year}</span>
                <span>IMDB ID:</span> <span>{movie.imdbID}</span>
            </p>
            <img src={movie.Poster} alt="Movie poster"></img>
            <button onClick={() => displayLabel(movie.Title)}>Display Label for {movie.Title}</button>
        </div>
    );
}

export default MovieInfo;