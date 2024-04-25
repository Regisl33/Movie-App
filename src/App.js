import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const App = () => {
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR"
      )
      .then((res) => setMovieData(res.data.results));
  }, []);

  return <div></div>;
};

export default App;
