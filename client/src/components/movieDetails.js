import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../data/movies";

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieDetail;
