import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Main from "./Components/Main";
import Favorite from "./Components/Favorite";

const App = () => {
  const [movieData, setMovieData] = useState([]);
  const [searchResult, setSearchResult] = useState("");
  const [topFlop, setTopFlop] = useState("");
  const [sortedMovie, setSortedMovie] = useState([]);

  const urlSearch = searchResult === "" ? "e" : searchResult;

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=" +
          urlSearch +
          "&language=fr-FR"
      )
      .then((res) => setMovieData(res.data.results));
  }, [searchResult]);

  useEffect(() => {
    if (topFlop === "") {
      setSortedMovie(movieData);
    } else {
      topFlop === "top"
        ? setSortedMovie(
            movieData.sort((a, b) => b.vote_average - a.vote_average)
          )
        : setSortedMovie(
            movieData.sort((a, b) => a.vote_average - b.vote_average)
          );
    }
  }, [searchResult, movieData, topFlop]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              searchResult={searchResult}
              setSearchResult={setSearchResult}
              topFlop={topFlop}
              setTopFlop={setTopFlop}
              sortedMovie={sortedMovie}
            />
          }
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
