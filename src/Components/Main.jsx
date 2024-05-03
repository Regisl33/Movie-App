import React from "react";
import Header from "./Header";
import Filters from "./Filters";

const Main = ({
  searchResult,
  setSearchResult,
  topFlop,
  setTopFlop,
  sortedMovie,
}) => {
  const content = (
    <main>
      <Header />
      <Filters
        searchResult={searchResult}
        setSearchResult={setSearchResult}
        topFlop={topFlop}
        setTopFlop={setTopFlop}
      />
    </main>
  );

  return content;
};

export default Main;
