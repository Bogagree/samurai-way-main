import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsType = {
    posts: Array<PostType>
}

export const MyPosts: React.FC<MyPostsType> = (props) => {

    return (
        <>
            <div className={s.posts_content}>

                {props.posts.map((post, index) =>
                    <Post key={post.id}
                          posts={props.posts}
                    />
                )}

            </div>
        </>
    );
};

