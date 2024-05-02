import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const Filters = () => {
  const searchBar = (
    <div className="search-bar">
      <input type="text" id="search-bar" placeholder="Rechercher" />
      <label id="search-bar">Rechercher</label>
    </div>
  );

  const topFlop = (
    <div className="topFlop">
      <button>
        Top
        <FaArrowUp />
      </button>
      <button>
        Flop
        <FaArrowDown />
      </button>
    </div>
  );

  const content = (
    <div className="filters">
      {searchBar}
      {topFlop}
    </div>
  );
  return content;
};

export default Filters;
