import MovieComponent from './MovieInfo';
import { MovieProps } from '../Interfaces/Interfaces';

function MovieInfoGroup(props: any) {
    const movieData: MovieProps[] = props.data;
    return (
        <div>
            {movieData.map((movie: MovieProps) => (
                <div key={movie.Title}><MovieComponent movie={movie}/></div>
         ))}
      </div>
    );
}

export default MovieInfoGroup;