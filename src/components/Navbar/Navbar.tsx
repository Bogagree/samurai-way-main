import React from 'react';
import style from './Navbar.module.css'
import {NavLink, Route} from "react-router-dom";
import {FriendsContainer} from "./Friends/FriendsContainer";

type NavbarPropsType = {

}

export const Navbar: React.FC<NavbarPropsType> = (props) => {
    return (
        <>
            <nav className={style.navbar}>
                <ul className={`${style.nav_links}`}>
                    <li>
                        <div className={`${style.item} ${style.item_profiles}`}>
                            <NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink>
                        </div>
                    </li>
                    <li>
                        <div className={`${style.item} ${style.item_messages}`}>
                            <NavLink to="/dialogs" activeClassName={style.activeLink}>Messages</NavLink>
                        </div>
                    </li>
                    <li>
                        <div className={`${style.item} ${style.item_news}`}>
                            <NavLink to="/news" activeClassName={style.activeLink}>News</NavLink>
                        </div>
                    </li>
                    <li>
                        <div className={`${style.item} ${style.item_music}`}>
                            <NavLink to="/music" activeClassName={style.activeLink}>Music</NavLink>
                        </div>
                    </li>
                    <li>
                        <div className={`${style.item} ${style.item_settings}`}>
                            <NavLink to="/settings" activeClassName={style.activeLink}>Settings</NavLink>
                        </div>
                    </li>
                </ul>

                <Route
                    path="/profile"
                    render={() => <FriendsContainer/>} />
            </nav>
        </>
    );
};

