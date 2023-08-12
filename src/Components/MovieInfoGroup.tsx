import dummyData from '../DummyData/dummy.json';
import MovieComponent from './MovieInfo';
import { MovieProps } from '../Interfaces/Interfaces';

//const data: MovieProps[] = dummyData.Search;

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