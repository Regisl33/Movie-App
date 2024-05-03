import React from "react";
import { CiStar } from "react-icons/ci";
import GenreList from "./GenreList";

const Movie = ({ movie, genreID, favorite, setFavorite }) => {
  let favoriteArray = [];

  const updateFavorite = (id) => {
    let uniqueItem = true;
    favoriteArray = favorite;

    console.log(favoriteArray);

    if (favoriteArray.lenght == 0) {
      favoriteArray.push(id);
    } else {
      favoriteArray.map((movie) =>
        movie.id == id ? (uniqueItem = false) : null
      );
      console.log(uniqueItem);
      if (uniqueItem) {
        favoriteArray.push(id);
      }
    }

    console.log(favoriteArray);

    setFavorite(favoriteArray);
  };

  return (
    <div className="movie-card">
      {/* <img
        src={
          movie.backdrop_path
            ? "https://image.tmdb.org/t/p/original/" + movie.backdrop_path
            : "./poster.jpg"
        }
        alt={movie.title}
      /> */}
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
            genreID={genreID}
          />
        ))}
      </ul>
      <h2>Synopsis</h2>
      <p>{movie.overview}</p>
      <button onClick={() => updateFavorite(movie.id)}>
        Ajouter aux coups de coeur
      </button>
    </div>
  );
};

export default Movie;
