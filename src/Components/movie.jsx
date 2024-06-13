import React from "react";
import { CiStar } from "react-icons/ci";
import GenreList from "./GenreList";

const Movie = ({ movie, state, dispatch }) => {
  //Button Logic Display
  const pageContent =
    window.location.pathname === "/coups-de-coeurs" ? (
      <button
        onClick={() => dispatch({ type: "removeFavorite", payload: movie.id })}
      >
        Retirer des coups de coeur
      </button>
    ) : (
      <button onClick={() => dispatch({ type: "addFavorite", payload: movie })}>
        Ajouter aux coups de coeur
      </button>
    );
  //Html Return of the Movie Card
  return (
    <div className="movie-card" key={movie.id}>
      <img
        src={
          movie.backdrop_path
            ? "https://image.tmdb.org/t/p/original/" + movie.backdrop_path
            : "./poster.jpg"
        }
        alt={movie.title}
      />
      <div className="movie-infos">
        <h2>{movie.title}</h2>
        <p> Sortie le: {movie.release_date} </p>
        <h2>
          {Math.round(movie.vote_average * 10) / 10} /10 <CiStar />
        </h2>
        <ul>
          {movie.genre_ids.map((id) => (
            <GenreList key={id} id={id} state={state} />
          ))}
        </ul>
        <h2>Synopsis</h2>
        <p className="overview">{movie.overview}</p>
        {pageContent}
      </div>
    </div>
  );
};

export default Movie;
