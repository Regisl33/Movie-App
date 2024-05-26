import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const Filters = ({ state, dispatch }) => {
  const searchBar = (
    <div className="search-bar">
      <input
        type="text"
        id="search-bar"
        placeholder="Rechercher"
        value={state.searchResult}
        onChange={(e) =>
          dispatch({ type: "setSearchResult", payload: e.target.value })
        }
      />
      <label id="search-bar">Rechercher</label>
    </div>
  );

  const topFlopHTML = (
    <div className="topFlop">
      <button
        className="topBtn"
        onClick={() =>
          dispatch({
            type: "setTopFlop",
            payload: state.topFlop === "top" ? "" : "top",
          })
        }
      >
        Top
        <FaArrowUp />
      </button>
      <button
        className="flopBtn"
        onClick={() =>
          dispatch({
            type: "setTopFlop",
            payload: state.topFlop === "flop" ? "" : "flop",
          })
        }
      >
        <FaArrowDown />
        Flop
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
