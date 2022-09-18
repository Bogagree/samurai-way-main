import React from 'react';
import style from './Header.module.css'
import {NavLink, Redirect} from "react-router-dom";
import Bogatyrev from '../../assets/images/avatars/friends/Dimych_B.jpg'

type HeaderPropsType = {
    isAuth: boolean
    logout: () => void
}

export const Header = (props: HeaderPropsType) => {

    return (
        <>
            if (!props.isAuth) {<Redirect to={'/login'}/>}

            <header className={style.header}>
                <div className={style.header_wrapper}>
                    <div className={style.logo}>
                        <a href="/profile">
                            <h1>TagBogNet</h1>
                            <p className={style.logo_subtitle1}>the WAY of the</p>
                            <p className={style.logo_subtitle2}>WARRIOR</p>
                        </a>
                    </div>

                    <div className={style.header_yo_hey}>
                        <p className={style.header_yo}><i>say me "Yo!"</i></p>
                        <p className={style.header_hey}><i>and dont forget "Hey!"</i></p>
                    </div>

                    <div className={style.auth}>
                        {props.isAuth
                            ? <img className={style.avatar} src={Bogatyrev} alt="my_foto"/>
                            : <NavLink to={'/login'} className={style.sign_in_button}>Login</NavLink>

                        }
                        <button className={style.sign_up_button} onClick={props.logout}>Log out</button>
                    </div>
                </div>
            </header>
        </>
    );
};