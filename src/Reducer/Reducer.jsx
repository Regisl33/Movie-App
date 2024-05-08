export const initState = {
  movieData: [],
  sortedMovie: [],
  genreID: [],
  favorite: [],
  topFlop: "",
  searchResult: "",
  mainDisplay: true,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "setMovieData": {
      return {
        ...state,
        movieData: action.payload,
        sortedMovie: action.payload,
      };
    }
    case "setGenreID": {
      return { ...state, genreID: action.payload };
    }
    case "setFavorite": {
      localStorage.favorite = JSON.stringify(action.payload);
      return { ...state, favorite: action.payload };
    }
    case "setTopFlop": {
      if (action.payload === "top") {
        const newArray = state.movieData.sort(
          (a, b) => b.vote_average - a.vote_average
        );
        return { ...state, topFlop: action.payload, sortedMovie: newArray };
      } else if (action.payload === "flop") {
        const newArray = state.movieData.sort(
          (a, b) => a.vote_average - b.vote_average
        );
        return { ...state, topFlop: action.payload, sortedMovie: newArray };
      } else {
        return {
          ...state,
          topFlop: action.payload,
          sortedMovie: state.movieData,
        };
      }
    }
    case "setSearchResult": {
      return { ...state, searchResult: action.payload };
    }
    case "setMainDisplay": {
      return { ...state, mainDisplay: action.payload };
    }
    default:
      throw new Error("unknown reducer action" + action.type);
  }
};
