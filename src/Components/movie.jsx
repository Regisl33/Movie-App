import React from "react";
import { CiStar } from "react-icons/ci";
import GenreList from "./GenreList";

const Movie = ({ movie, state, dispatch }) => {
  let favoriteArray = [];

  const addFavorite = (id) => {
    favoriteArray = state.favorite;
    favoriteArray.push(id);
    dispatch({ type: "setFavorite", payload: favoriteArray });
  };

  const removeFavorite = (id) => {
    favoriteArray = state.favorite;
    favoriteArray.filter((movie) => movie.id !== parseInt(id));
    dispatch({ type: "setFavorite", payload: favoriteArray });
  };

  const pageContent =
    mainDisplay === true ? (
      <button onClick={() => addFavorite(movie.id)}>
        Ajouter aux coups de coeur
      </button>
    ) : (
      <button onClick={() => removeFavorite(movie.id)}>
        Retirer des coups de coeur
      </button>
    );

  return (
    <div className="movie-card">
      <img
        src={
          movie.backdrop_path
            ? "https://image.tmdb.org/t/p/original/" + movie.backdrop_path
            : "./poster.jpg"
        }
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p> Sortie le: {movie.release_date} </p>
      <h2>
        {Math.round(movie.vote_average * 10) / 10} /10 <CiStar />
      </h2>
      <ul>
        {movie.genre_ids.map((id) => (
          <GenreList
            key={id}
            id={id}
            state={state}
          />
        ))}
      </ul>
      <h2>Synopsis</h2>
      <p>{movie.overview}</p>
      {pageContent}
    </div>
  );
};

export default Movie;
