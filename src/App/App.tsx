import { useState, createContext } from 'react';
import { MovieProps } from '../Interfaces/Interfaces';

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

  const value = { movieInfo, setMovieInfo };

  return (
    <div className="App">
      <MovieContext.Provider value={value}>
        {movieInfo.length <= 0 &&
          <p>Please search for movie below</p>
        }
        <SearchBar />
        <button onClick={() => setMovieInfo([])}>Clear search results</button>
        <MovieInfoGroup data={movieInfo} />
      </MovieContext.Provider>
    </div>
  );
}

export default App;
