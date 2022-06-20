import React from 'react';
import style from './NavBar.module.css'
import {NavLink} from "react-router-dom";



export const NavBar = () => {
    return (
        <nav className={style.NavBar}>
            <div><NavLink to="/Profile" activeClassName={style.ActiveLink}>Profile</NavLink></div>
            <div><NavLink to="/Messages" activeClassName={style.ActiveLink}>Messages</NavLink></div>
            <div><NavLink to="/Friends" activeClassName={style.ActiveLink}>Friends</NavLink></div>
            <div><NavLink to="/Gallery" activeClassName={style.ActiveLink}>Gallery</NavLink></div>
            <div><NavLink to="/Music" activeClassName={style.ActiveLink}>Music</NavLink></div>
        </nav>
    );
};


