import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const isNavLinkActive = ({isActive}) => {
  return {color: isActive ? "gold" : ""};
};

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" style={isNavLinkActive}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" style={isNavLinkActive}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" style={isNavLinkActive}>
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" style={isNavLinkActive}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" style={isNavLinkActive}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" style={isNavLinkActive}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
