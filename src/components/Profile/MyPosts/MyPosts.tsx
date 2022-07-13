import React, {ChangeEvent, useState} from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsType = {
    posts: Array<PostType>
    addPost: (newMessage: string) => void
}

export const MyPosts: React.FC<MyPostsType> = (props) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const [value, setValue] = useState<string>('');
    // как в видео #33 у Димыча не работало, поэтому сделал локальный стэйт, чтобы очищать textarea

    const addPost = () => {
        let text = newPostElement.current?.value
        text &&  props.addPost(text);
        setValue('')
    }

    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <>
            <div>
                <textarea name="post" ref={newPostElement} value={value} onChange={onChangeHandler}></textarea>
                <button onClick={addPost}>add post</button>
            </div>

            <div className={style.posts_content}>

                {props.posts.map( (p) =>
                    <Post key={p.id}
                          post={p}
                    />
                )}

            </div>
        </>
    );
};

