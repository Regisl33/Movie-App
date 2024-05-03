import React from "react";
import Header from "./Header";
import Filters from "./Filters";
import Movie from "./Movie";

const Main = ({
  searchResult,
  setSearchResult,
  topFlop,
  setTopFlop,
  sortedMovie,
  genreID,
  favorite,
  setFavorite,
}) => {
  const pageContent = sortedMovie.slice(0, 12).map((movie) => (
    <Movie
      key={movie.id}
      movie={movie}
      genreID={genreID}
      favorite={favorite}
      setFavorite={setFavorite}
    />
  ));

  const content = (
    <main>
      <Header />
      <Filters
        searchResult={searchResult}
        setSearchResult={setSearchResult}
        topFlop={topFlop}
        setTopFlop={setTopFlop}
      />
      {pageContent}
    </main>
  );

  return content;
};

export default Main;
