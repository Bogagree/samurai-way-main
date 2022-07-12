import React from 'react';
import style from './Header.module.css'

export const Header = () => {
    return (
        <>
            <header className={style.header}>
                <div className={style.header_wrapper}>
                    <div className={style.logo}>
                        <a href="">
                            <h1>TagBogNet</h1>
                            <p className={style.logo_subtitle1}>the WAY of the</p>
                            <p className={style.logo_subtitle2}>WARRIOR</p>
                        </a>
                    </div>

                    <div className={style.header_yo_hey}>
                        <p className={style.header_yo}><i>say me "Yo!"</i></p>
                        <p className={style.header_hey}><i>and dont forget "Hey!"</i></p>
                    </div>

                    <div>
                        <button className={style.sign_in_button}>Sign in</button>
                        <button className={style.sign_up_button}>Sign up</button>
                    </div>
                </div>
            </header>
        </>
    );
};