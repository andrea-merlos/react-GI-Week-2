import "./App.css";

import React, { useState } from "react";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMovie = async (movieName) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          movieName
        )}&api_key=f2800d3f849beac6fe40317bc15046dd&language=en-US&page=1`
      );
      if (!response.ok) {
        throw new Error("There was a problem with the movie fetch request.");
      }

      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovie(searchQuery);
  };

  const handleReset = () => {
    setSearchQuery("");
    setMovies([]);
  };

  return (
    <div className="App">
      <h1>Movie Search</h1>
      <form onSubmit={handleSubmit} id="form">
        <input
          id="search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for movies..."
        />
        <button id="submit" type="submit" disabled={loading}>
          Search
        </button>
      </form>
      <button id="reset" onClick={handleReset}>
        Reset
      </button>
      {loading && <p>Loading...</p>} {/* Show loading indicator */}
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Show error message */}
      <div className="result">
        {movies.length > 0 && (
          <div className="movie-list">
            {movies.map((movie) => (
              <div key={movie.id} className="movie-item">
                <div className="movie-container">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className="movie-info">
                    <p className="movie-description">{movie.overview}</p>
                    <p className="movie-date">{movie.release_date}</p>
                  </div>
                </div>
                <p>{movie.title}</p>
              </div>
            ))}
          </div>
        )}
        {movies.length === 0 && !loading && <p>No results found</p>}
      </div>
    </div>
  );
};

export default App;
