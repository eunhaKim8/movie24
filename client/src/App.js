// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MovieList from "./components/movieList";
import MovieDetail from "./components/movieDetails";

const App = () => {
  const [data, setData] = useState([{}]);
  return (
    <Router>
      <h1>MOVIE24</h1>
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<MovieList />} />
        {/* 상세 페이지 */}
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
