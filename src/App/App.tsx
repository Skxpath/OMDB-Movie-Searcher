import { useState, createContext } from 'react';
import { MovieProps } from '../Types/Types';

import SearchBar from '../Components/SearchBar';
import MovieInfoGroup from '../Components/MovieInfoGroup';

import './App.css';

export interface MovieContextInterface {
  movieInfo: MovieProps[];
  setMovieInfo: React.Dispatch<React.SetStateAction<MovieProps[]>>;
}

export const MovieContext = createContext<MovieContextInterface>({
  movieInfo: [],
  setMovieInfo: () => { },
});

function App() {
  const [movieInfo, setMovieInfo] = useState<MovieProps[]>([]);

  return (
    <div className="App">
      <MovieContext.Provider value={{ movieInfo, setMovieInfo }}>
        <SearchBar />
        <MovieInfoGroup data={movieInfo} />
      </MovieContext.Provider>
    </div>
  );
}

export default App;
