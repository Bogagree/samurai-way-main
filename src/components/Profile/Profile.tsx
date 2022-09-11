import React from 'react';
import style from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType, UserProfileType} from "../../redux/profile-reducer";

type ProfileType = {
    posts: PostType[]
    userProfile: UserProfileType | null
    addPost: (newMessage: string) => void
}

export const Profile: React.FC<ProfileType> = (props) => {
debugger
        return (
            <div className={style.profile}>
                {
                    props.userProfile
                        ? <>
                            <ProfileInfo userProfile={props.userProfile}/>
                            <MyPosts posts={props.posts}
                                     addPost={props.addPost}
                            /></>
                        : <MyPosts posts={props.posts}
                                   addPost={props.addPost}
                        />
                }
            </div>
        );
};