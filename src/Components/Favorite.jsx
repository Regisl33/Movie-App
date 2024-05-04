import React, { useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import Movie from "./Movie";

const Favorite = ({
  genreID,
  favorite,
  setFavorite,
  mainDisplay,
  setMainDisplay,
}) => {
  const favoriteMovieArray = [];
  const newArray = [];

  const removeDuplicate = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  };

  useEffect(() => {
    const newArray = removeDuplicate(favorite);

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
  }, [favorite]);

  const content = (
    <main>
      <Header setMainDisplay={setMainDisplay} />
      {favoriteMovieArray &&
        favoriteMovieArray.map((movie) => (
          <Movie
            movie={movie}
            genreID={genreID}
            favorite={favorite}
            setFavorite={setFavorite}
            mainDisplay={mainDisplay}
          />
        ))}
    </main>
  );
  return content;
};

export default Favorite;
