import React from 'react';
import style from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/profile-reducer";

type ProfileType = {
    posts: PostType[]
    addPost: (newMessage:string) => void
    updateNewPostText: (newText: string) => void
}

export const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div className={style.profile}>
            <ProfileInfo />
            <MyPosts posts={props.posts}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};