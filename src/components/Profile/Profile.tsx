import React from 'react';
import style from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfileType = {
    profilePage: ProfilePageType
    addPost: (newMessage:string) => void
}

export const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div className={style.profile}>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts} addPost={props.addPost}/>
        </div>
    )
        ;
};