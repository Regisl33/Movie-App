import React from "react";
import Header from "./Header";
import Movie from "./Movie";

const Favorite = ({ state, dispatch }) => {
  //Return of the Favorite Page and Display of the Favorite Logic
  const content = (
    <main>
      <Header />
      <div className="favorite-movies">
        {state.favorite.length > 0
          ? state.favorite.map((movie) => (
              <Movie
                key={movie.id}
                movie={movie}
                state={state}
                dispatch={dispatch}
              />
            ))
          : null}
      </div>
    </main>
  );
  return content;
};

export default Favorite;
