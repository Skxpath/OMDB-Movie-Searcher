# OMDB Movie Searcher
This project is a bare bones implementation of a web app that queries the omdb api (http://www.omdbapi.com/) for movies. 

Currently supported features:
- Searching movie by name (optionally include year of movie)

Tech Stack:
- React
- TypeScript

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

/src/Interfaces:
- Includes TS types and interfaces to type our components and search requests

/src/DummyData:
- Mock data used for development purposes

## Setup
- Please acquire an api key (http://www.omdbapi.com/apikey.aspx) and create .env file (see .env.example in root) including the key
- You can configure the "apiUrl" in src/config.json (default http://www.omdbapi.com/)

## To Run in dev mode
Inside the root folder:

### `npm install`
### `npm start`

