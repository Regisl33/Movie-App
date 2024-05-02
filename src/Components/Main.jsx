import React from "react";
import Header from "./Header";
import Filters from "./Filters";

const Main = () => {
  const content = (
    <main>
      <Header />
      <Filters />
    </main>
  );

  return content;
};

export default Main;
