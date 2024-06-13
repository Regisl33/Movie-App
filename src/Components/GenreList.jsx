import React from "react";

const GenreList = ({ id, state }) => {
  //Identification of Genre Logic and Display of Genre
  const content = state.genreID.map((genre) =>
    genre.id == id ? <li key={id}>{genre.name}</li> : null
  );

  return content;
};
export default GenreList;
