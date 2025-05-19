import React from "react";
import { NavLink } from "react-router-dom";
import menu from "./nav";

const Nav = () => {
  return (
    <ul>
      {menu.map((item) => {
        return (
          <li className="menu-item-has-children" key={item.id}>
            <NavLink to={item.path}>{item.title}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
