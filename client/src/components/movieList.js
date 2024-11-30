import React from "react";
import { Link } from "react-router-dom";

import { movies } from "../data/movies";

const MovieList = () => {
  return (
    <div>
      <h3>Movie List</h3>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
