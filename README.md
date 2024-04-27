# Hosted App
https://movie-flixapp.netlify.app/

# To Run the App

## Install the node_modules
### `npm i`


## To start the React Vite App
### `npm run dev`


### Tech Stack
```
- React
- Vite [for production build]
- Tailwind Css (used only for styling) [css framework]
- State Management [React Context]
```

# Requirements Covered

### Layout and UI
```
- Code Splitting [Improve Performance].
- Reusable UI Component.
- Used proper folder structure for better readability of the code and followed Single Responsibilty Principle.
```

### Default page load state
```
- Displayed list of Movies in descending Order of Popularity.
- Shown Movie Title, Image, Genre, Short Description [on Hover of each card].
- By Default Movies loaded for year 2012, load movies of previous year when user scrolls up and load movies of next year when user scrolls down until the current year.
- Shown 20 movies for each year.
```

### API Integration
```
- Used Axios to call an API. Used interceptors for handling errors like 5xx, 4xx also display errors in alert with sufficiant details(Error Code, Message, api).
- To fetch Movies.
- To fetch Genre of the Movies.
- To fetch the searched Movies.
```

### Genre Filter
```
- Filtering of multiple movies based on checkbox [Genres].
- Fetched all the Genres from the given tmdb api.
- When a user selects one or more genres, the list should only display movies of
the selected genres.
```

### Bonus (Optional) - Covered
```
- Search Functionality which searches for the movie based on the search string
and displays an infinite loading list of movies which matches the search.
- When scroll down it fetch the next page movie.
```


# Requirements NOT Covered
```
- React virtualization for smooth scrolling. [Commented the working code for mobile]. Not able to make list responsive at the time of React Virtualization.
- Typescript support.
- Loading state can be improve move for better user experience.
```