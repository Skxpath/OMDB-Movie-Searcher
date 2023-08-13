import { useState } from 'react';
import { MovieProps } from '../Types/Types';

import SearchBar from '../Components/SearchBar';
import MovieInfoGroup from '../Components/MovieInfoGroup';

import './App.css';

function App() {
  const [movieInfo, setMovieInfo] = useState<MovieProps[]>([]);

  return (
    <div className="App">
        <SearchBar setMovieInfo={setMovieInfo} />
        <MovieInfoGroup movieInfo={movieInfo} />
    </div>
  );
}

export default App;
