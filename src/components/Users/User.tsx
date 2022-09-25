import React from 'react';
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import defaultAvatar from "../../assets/images/avatars/2.png";
import {UserType} from "../../redux/users-reducer";

type UserComponentPropsType = {
    user: UserType
    toggleFollow: (userId: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: number[]
    toggleFollowUserTC: (userId: number, isFollowed: boolean) => void
}

export const User:React.FC<UserComponentPropsType> = ({user, followingInProgress,toggleFollowingProgress,toggleFollowUserTC}) => {

        return <div >
            <div style={{display: 'flex', padding: '5px'}}>
                <div>
                    <div className={style.ava_container}>
                        <NavLink to={'/profile/' + user.id}>
                            <img
                                src={user.photos.small ? `${user.photos.small}` : defaultAvatar}
                                alt="user_foto" className={style.avatar}
                            /></NavLink>
                    </div>
                    <button
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            toggleFollowingProgress(true, user.id)
                            toggleFollowUserTC(user.id, user.followed)
                        }
                        }> {user.followed ? 'Unfollow' : 'Follow'}</button>
                </div>
                <div style={{padding: '5px'}}>
                    <strong>name</strong>: {user.name}
                    <br/>
                    <strong><i>status</i></strong>: {user.status}
                    <br/>
                    <hr/>
                </div>
            </div>
        </div>
};