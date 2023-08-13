# OMDB Movie Searcher
This project is a bare bones implementation of a web app that queries the omdb api (http://www.omdbapi.com/) for movies. 

Important Notes:
- OMDB Api only allows 1000 requests a day with the free version of the api key
- It will only return first 10 entries in the search (but include totalResults in the payload)

Currently supported features:
- Searching movie by name (optionally include year of movie).
- Displays following information about all movies matching search parameters: Title, Year, imdbID, Poster.
- We currently only support searching for &type=movie - but this can be extended in the future.
- Includes dummy button that can be later used to support displaying a label.

Tech Stack:
- React
- TypeScript

Future nice to have:
- Add paging to search results (If we had much more than 10, it would be good)
- Add radio button selection for type to search (movie, series, episode, all)
- Add search by imdb id or title. Return plot of movie and other details when asking for "more details" of specific movie
- Cache pre-searched results to prevent spamming api. Similarly add timeouts to calling api on user or server side ("You have recently searched! Please wait a few seconds...")
- Add unit tests
- Add css styling
- Use actual request library instead of fetch()
- Use actual state management if app gets large enough to require it
- The list goes on...

## Code Structure
root:
- .env - Create one for api key, see .env.example

/src:
- config.json - Populate api endpoint url here
- index - React root file

/src/App:
- App - renders the SPA. Includes context store that child components use to re-render.

/src/Components:
- MovieInfo - component to display individual movie information
- MovieInfoGroup - component that displays one or more MovieInfo components. Used to render search results
- SearchBar - component that controls user input and requests to requesthandler

/src/Api:
- omdbRequests - contains requesthandlers to api. Currently only supports searching by name and year

/src/Types:
- Includes TS types for our components and search requests

## Setup
- Please acquire an api key (http://www.omdbapi.com/apikey.aspx) and create .env file (see .env.example in root) including the key
- You can configure the "apiUrl" in src/config.json (default http://www.omdbapi.com/)

## To Run in dev mode
Inside the root folder:

### `npm install`
### `npm start`

