import SearchBar from '../Components/SearchBar';
import MovieInfoGroup from '../Components/MovieInfoGroup';
import './App.css';
import { useState, useContext, createContext } from 'react';
import { MovieProps } from '../Interfaces/Interfaces';

export interface iMovieContext {
  movieInfo: MovieProps[];
  setMovieInfo: React.Dispatch<React.SetStateAction<MovieProps[]>>;
}

export const MovieContext = createContext<iMovieContext>({
  movieInfo: [],
  setMovieInfo: () => {},
});

function App() {
  const [movieInfo, setMovieInfo] = useState<MovieProps[]>([{
    "Title": "Dummy Transformers from context",
    "Year": "2007",
    "imdbID": "tt0418279",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWI1NjkxM2MtOTU4My00YzQ5LTliNGMtNmFlM2U5NWM3MDY1XkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"
  },
  {
    "Title": "Dummy Transformers: Dark of the Moon",
    "Year": "2011",
    "imdbID": "tt1399103",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ@@._V1_SX300.jpg"
  }]);

  const value = { movieInfo, setMovieInfo };

  return (
    <div className="App">
      <MovieContext.Provider value={value}>
        <SearchBar/>
        <MovieInfoGroup data={movieInfo}/>
      </MovieContext.Provider>
    </div>
  );
}

export default App;
