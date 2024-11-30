// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MovieList from "./components/MovieList/movieList";
import MovieDetail from "./components/movieDetails";

const App = () => {
  const [data, setData] = useState([{}]);
  return (
    <Router>
      <h1>MOVIE24</h1>
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/movies/popular" element={<MovieList />} />
      </Routes>
    </Router>
  );
};

export default App;
