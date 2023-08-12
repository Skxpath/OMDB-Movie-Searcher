import MovieComponent from './MovieInfo';
import { MovieProps } from '../Types/Types';

function MovieInfoGroup(props: { data: MovieProps[] }) {
    const movieData: MovieProps[] = props.data;
    return (
        <div>
            {movieData.map((movie: MovieProps) => (
                <div key={movie.imdbID}><MovieComponent movie={movie} /></div>
            ))}
        </div>
    );
}

export default MovieInfoGroup;