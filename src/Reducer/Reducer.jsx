export const initState = {
  movieData: [],
  sortedMovie: [],
  genreID: [],
  favorite: [],
  topFlop: "",
  searchResult: "",
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
    case "addFavorite": {
      let newArrayAdd = state.favorite;
      if (newArrayAdd.length > 0) {
        let uniqueItem = true;
        newArrayAdd.map((movie) =>
          movie.id === action.payload.id ? (uniqueItem = false) : null
        );
        if (uniqueItem) {
          newArrayAdd.push(action.payload);
        }
      } else {
        newArrayAdd.push(action.payload);
      }
      localStorage.favorite = JSON.stringify(newArrayAdd);
      return { ...state, favorite: newArrayAdd };
    }
    case "removeFavorite": {
      let newArrayDel = state.favorite.filter(
        (movie) => movie.id !== action.payload
      );
      localStorage.favorite = JSON.stringify(newArrayDel);
      return { ...state, favorite: newArrayDel };
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
    default:
      throw new Error("unknown reducer action" + action.type);
  }
};
