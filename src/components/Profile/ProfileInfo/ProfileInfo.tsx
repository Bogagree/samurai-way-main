import React from 'react';
import style from './ProfileInfo.module.css'
import {UserProfileType} from "../../../redux/profile-reducer";
import ProfileStatus from "../ProfileStatus";


type ProfileInfoType = {
    userProfile: UserProfileType
    status: string
    updateUserStatusTC: (status: string) => void
}

export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    return (
        <div>
            <div className={style.profile}>
                <div className={style.userProfile}>
                    {props.userProfile &&
                        <img src={props.userProfile.photos.large} alt={'profile photo'}/>
                    }
                    <br/>
                    full name: {props.userProfile.fullName}
                    <br/>
                    about me: {props.userProfile.aboutMe}
                    <ProfileStatus status={props.status}
                                   updateUserStatusTC={props.updateUserStatusTC}
                    />
                </div>

                {/*<img className={style.main_img}*/}
                {/*     src="https://i.ytimg.com/vi/ONTIDCe0DeE/maxresdefault.jpg"*/}
                {/*     alt="картинка профайла"/>*/}

                <div>
                    Это мой профайл где будет My ava + description
                </div>

            </div>
        </div>
    );
}