import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => (
  <header className={style.header}>
    <nav>
      <NavLink to="/" exact className="link" activeClassName="linkActive">
        Home
      </NavLink>
      <NavLink to="/pets" exact className="link" activeClassName="linkActive">
        Pets
      </NavLink>
      <NavLink to="/about" exact className="link" activeClassName="linkActive">
        About
      </NavLink>
    </nav>
  </header>
);

export default Header;
