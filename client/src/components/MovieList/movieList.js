import React, { useState, useEffect } from "react";
import axios from "axios";

import "./movieList.css";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("/movies/popular")
      .then((response) => {
        setMovies(response.data.results); // 영화 목록 데이터를 상태로 저장
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width="200"
            />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
