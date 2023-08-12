/*
Poster
Title
Year of Release
Button (component) -> displaying a label


{
    "Title": "Transformers",
    "Year": "2007",
    "imdbID": "tt0418279",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWI1NjkxM2MtOTU4My00YzQ5LTliNGMtNmFlM2U5NWM3MDY1XkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"
},
*/
import { MovieProps } from '../Interfaces/Interfaces';

function displayLabel() {

}

function MovieInfo(props: any) {
    const movie: MovieProps = props.movie;
    return (
        <div className='movie-info-component'>
            <p className='movie-title'>Title: {movie.Title}</p>
            <p className='movie-year'>Year: {movie.Year}</p>
            <p className='movie-imdbID'>imdbID: {movie.imdbID}</p>
            <img className='movie-poster' src={movie.Poster} alt="Movie poster"></img>
            <button className='movie-display-label-button' onClick={displayLabel}>Display Label for {movie.Title}</button>
        </div>
    );
}

export default MovieInfo;