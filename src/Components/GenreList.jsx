import React from "react";

const GenreList = ({ id, state }) => {
  const content = state.genreID.map((genre) =>
    genre.id == id ? <li key={id}>{genre.name}</li> : null
  );

  return content;
};
export default GenreList;
