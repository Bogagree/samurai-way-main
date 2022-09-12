import React from 'react';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";

type MyPostsType = {
    posts: Array<PostType>
    addPost: (newMessage: string) => void
    updateNewPostText?: (newText: string) => void
}

export const MyPosts: React.FC<MyPostsType> = (props) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        let text = newPostElement.current?.value
        text &&  props.addPost(text)
        // setValue('')
    }

    let text = newPostElement.current?.value

    // const onChangeHandler = () => {
    //     // text && props.updateNewPostText(text)
    // }

    return (
        <>
            <div>
                <textarea name="post"
                          value={text}
                          ref={newPostElement}
                />
                <button onClick={addPost}>add post</button>
            </div>

            <div>
                {props.posts.map( (p) =>
                    <Post key={p.id}
                          post={p}
                    />
                )}

            </div>
        </>
    );
};

