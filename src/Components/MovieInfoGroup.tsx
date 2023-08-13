import MovieInfo from './MovieInfo';
import { MovieProps } from '../Types/Types';

type MovieInfoGroupProps = {
    movieInfo: MovieProps[];
}

function MovieInfoGroup({ movieInfo }: MovieInfoGroupProps) {
    const movieData: MovieProps[] = movieInfo;
    return (
        <div className='movie-info-group'>
            {movieData.map((movie: MovieProps) => (
                <div key={movie.imdbID}><MovieInfo movie={movie} /></div>
            ))}
        </div>
    );
}

export default MovieInfoGroup;