import { MovieProps } from '../Interfaces/Interfaces';

function displayLabel(title: string) {
    console.log("display label for " + title);
}

function MovieInfo(props: any) {
    const movie: MovieProps = props.movie;
    return (
        <div className='movie-info-component'>
            <p className='movie-title'>Title: {movie.Title}</p>
            <p className='movie-year'>Year: {movie.Year}</p>
            <p className='movie-imdbID'>imdbID: {movie.imdbID}</p>
            <p className='movie-type'>type: {movie.Type}</p>
            <img className='movie-poster' src={movie.Poster} alt="Movie poster"></img>
            <button className='movie-display-label-button' onClick={() => displayLabel(movie.Title)}>Display Label for {movie.Title}</button>
        </div>
    );
}

export default MovieInfo;