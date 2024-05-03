import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const Filters = ({ searchResult, setSearchResult, topFlop, setTopFlop }) => {
  const searchBar = (
    <div className="search-bar">
      <input
        type="text"
        id="search-bar"
        placeholder="Rechercher"
        value={searchResult}
        onChange={(e) => setSearchResult(e.target.value)}
      />
      <label id="search-bar">Rechercher</label>
    </div>
  );

  const topFlopHTML = (
    <div className="topFlop">
      <button
        id="top"
        onClick={(e) =>
          topFlop === "top" ? setTopFlop("") : setTopFlop("top")
        }
      >
        Top
        <FaArrowUp />
      </button>
      <button
        id="flop"
        onClick={(e) =>
          topFlop === "flop" ? setTopFlop("") : setTopFlop("flop")
        }
      >
        Flop
        <FaArrowDown />
      </button>
    </div>
  );

  const content = (
    <div className="filters">
      {searchBar}
      {topFlopHTML}
    </div>
  );
  return content;
};

export default Filters;
