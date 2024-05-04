import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ setMainDisplay }) => {
  const title = <h1 className="title">React Movies</h1>;

  const navigation = (
    <nav>
      <ul>
        <NavLink to="/">
          <li onClick={() => setMainDisplay(true)}>Acceuil</li>
        </NavLink>
        <NavLink to="/coups-de-coeurs">
          <li onClick={() => setMainDisplay(false)}>Coups de Coeurs</li>
        </NavLink>
      </ul>
    </nav>
  );

  const content = (
    <header>
      {navigation}
      {title}
    </header>
  );
  return content;
};

export default Header;
