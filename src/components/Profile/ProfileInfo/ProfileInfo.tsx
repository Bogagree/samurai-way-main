import React from 'react';
import style from './ProfileInfo.module.css'


type ProfileInfoType = {

}

export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {

    return (
        <div>
            <div className={style.profile}>

                <img className={style.main_img}
                     src="https://i.ytimg.com/vi/ONTIDCe0DeE/maxresdefault.jpg"
                     alt="картинка профайла"/>

                <div>
                    Это мой профайл где будет My ava + description
                </div>

            </div>
        </div>
    );
}