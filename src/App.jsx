import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Main from "./Components/Main";
import Favorite from "./Components/Favorite";

const App = () => {
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=test&language=fr-FR"
      )
      .then((res) => setMovieData(res.data.results));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
        <Route
          path="/coups-de-coeurs"
          element={<Favorite />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
