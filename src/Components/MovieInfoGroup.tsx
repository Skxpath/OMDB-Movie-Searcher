import MovieInfo from './MovieInfo';
import { MovieProps } from '../Types/Types';

type MovieInfoGroupProps = {
    data: MovieProps[];
}

function MovieInfoGroup({ data }: MovieInfoGroupProps) {
    const movieData: MovieProps[] = data;
    return (
        <div>
            {movieData.map((movie: MovieProps) => (
                <div key={movie.imdbID}><MovieInfo movie={movie} /></div>
            ))}
        </div>
    );
}

export default MovieInfoGroup;