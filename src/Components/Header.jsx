import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  //Return Title H1
  const title = <h1 className="title">React Movies</h1>;
  //Return Full Nav Logic
  const navigation = (
    <nav>
      <ul>
        <NavLink to="/">
          <li>Acceuil</li>
        </NavLink>
        <NavLink to="/coups-de-coeurs">
          <li>Coups de Coeurs</li>
        </NavLink>
      </ul>
    </nav>
  );
  //Return Full Header
  const content = (
    <header>
      {navigation}
      {title}
    </header>
  );
  return content;
};

export default Header;
