import React from "react";

const GenreList = ({ id, genreID }) => {
  const content = genreID.map((genre) =>
    genre.id == id ? <li key={id}>{genre.name}</li> : null
  );

  return content;
};
export default GenreList;
