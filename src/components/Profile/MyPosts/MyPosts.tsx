import React from 'react';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";
import {AddPostMessageReduxForm, PostsFormDataType} from "./AddPostForm";

type MyPostsType = {
    posts: Array<PostType>
    addPost: (newMessage: string) => void
}

export const MyPosts: React.FC<MyPostsType> = (props) => {

    // let newPostElement = React.createRef<HTMLTextAreaElement>()
    //
    // const addPost = () => {
    //     let text = newPostElement.current?.value
    //     text &&  props.addPost(text)
    //     // setValue('')
    // }
    // let text = newPostElement.current?.value

    const onSubmitAddPostMessage = (formData: PostsFormDataType) => {
        console.log(formData)
        props.addPost(formData.postMessage)
    }

    return (
        <>
            <div>
                <AddPostMessageReduxForm onSubmit={onSubmitAddPostMessage}/>
            </div>

            <div>
                {props.posts.map((p) =>
                    <Post key={p.id}
                          post={p}
                    />
                )}

            </div>
        </>
    );
};

