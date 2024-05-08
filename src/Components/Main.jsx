import React from "react";
import Header from "./Header";
import Filters from "./Filters";
import Movie from "./Movie";

const Main = ({ state, dispatch }) => {
  const pageContent = state.sortedMovie.slice(0, 12).map((movie) => (
    <Movie
      key={movie.id}
      movie={movie}
      state={state}
      dispatch={dispatch}
    />
  ));

  const content = (
    <main>
      <Header dispatch={dispatch} />
      <Filters
        state={state}
        dispatch={dispatch}
      />
      {pageContent}
    </main>
  );

  return content;
};

export default Main;
