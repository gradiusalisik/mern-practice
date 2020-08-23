import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    auth.logout();
    history.push("/");
  };
  return (
    <nav>
      <div className="nav-wrapper blue darken-1">
        <span className="brand-logo">Сокращение ссылок</span>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/create">Создать</NavLink>
          </li>
          <li>
            <NavLink to="/links">Ссылки</NavLink>
          </li>
          <li>
            <a href="/" onClick={handleLogout}>
              Выйти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
