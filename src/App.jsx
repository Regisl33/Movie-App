import React, { useEffect, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Main from "./Components/Main";
import Favorite from "./Components/Favorite";
import { initState, reducer } from "./Reducer/Reducer";

const App = () => {
  //Init Reducer
  const [state, dispatch] = useReducer(reducer, initState);
  //Define Search Url
  const urlSearch = state.searchResult === "" ? "e" : state.searchResult;
  //Init Genre Date and Local Storage Favorites
  useEffect(() => {
    axios
      .get("http://localhost:3000/genres")
      .then((res) => dispatch({ type: "setGenreID", payload: res.data }));

    if (localStorage.favorite) {
      dispatch({
        type: "setFavorite",
        payload: JSON.parse(localStorage.favorite),
      });
    }
  }, []);
  //Fetch Movie By Search
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=" +
          urlSearch +
          "&language=fr-FR"
      )
      .then((res) =>
        dispatch({ type: "setMovieData", payload: res.data.results })
      );
  }, [state.searchResult]);
  //Return of React Router
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main state={state} dispatch={dispatch} />} />
        <Route
          path="/coups-de-coeurs"
          element={<Favorite state={state} dispatch={dispatch} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
