import React, { useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import Movie from "./Movie";

const Favorite = ({ state, dispatch }) => {
  const favoriteMovieArray = [];

  const removeDuplicate = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  };

  useEffect(() => {
    const newArray = removeDuplicate(state.favorite);

    console.log(newArray);

    if (newArray.length > 0) {
      newArray.map((id) =>
        axios
          .get(
            "https://api.themoviedb.org/3/movie/" +
              id +
              "?api_key=ed82f4c18f2964e75117c2dc65e2161d"
          )
          .then((res) => favoriteMovieArray.push(res.data))
      );
    }
  }, [state.favorite]);

  const content = (
    <main>
      <Header dispatch={dispatch} />
      {favoriteMovieArray &&
        favoriteMovieArray.map((movie) => (
          <Movie
            movie={movie}
            state={state}
            dispatch={dispatch}
          />
        ))}
    </main>
  );
  return content;
};

export default Favorite;
