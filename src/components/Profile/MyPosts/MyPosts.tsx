import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsType = {
    posts: Array<PostType>
}

export const MyPosts: React.FC<MyPostsType> = (props) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        let text =  newPostElement.current?.value
        alert(text)
    }

    return (
        <>
            <div>
                <textarea name="post" ref={newPostElement}></textarea>
                <button onClick={addPost}>add post</button>
            </div>

            <div className={s.posts_content}>

                {props.posts.map((post) =>
                    <Post key={post.id}
                          posts={props.posts}
                    />
                )}

            </div>
        </>
    );
};

