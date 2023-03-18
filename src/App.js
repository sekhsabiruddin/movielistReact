import "./App.css";
// import "./GenreFilter.js";
import data from "./data";
import GenreFilter from "./GenreFilter.js";
import MovieList from "./MovieList.js";

function App() {
  const genres = [
    "Drama",
    "Crime",
    "Action",
    "Fantasy",
    "Western",
    "Science Fiction",
    "Thriller",
    "War",
    "Animation",
  ];

  return (
    <div className="App">
      <GenreFilter genres={genres} />
      <MovieList data={data} />
    </div>
  );
}

export default App;
