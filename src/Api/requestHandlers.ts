
export function omdbSearchRequest(requestString: string) {

    console.log("omdbSearchRequest: " + requestString);
    console.log(`${process.env.REACT_APP_OMDB_API_KEY}`);
    fetch('https://swapi.dev/api/people/1')
    .then((result: any) => result.text())
    .then((test) => console.log(test));

    //     "Title": "Set data Transformers",
    //     "Year": "2007",
    //     "imdbID": "tt0418279",
    //     "Type": "movie",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BNWI1NjkxM2MtOTU4My00YzQ5LTliNGMtNmFlM2U5NWM3MDY1XkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"
    // },
    // {
    //     "Title": "Setter Transformers: Dark of the Moon",
    //     "Year": "2011",
    //     "imdbID": "tt1399103",
    //     "Type": "movie",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ@@._V1_SX300.jpg"
    // }

}