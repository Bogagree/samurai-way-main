import React from 'react';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";
import {AddPostMessageReduxForm, PostsFormDataType} from "./AddPostForm";

type MyPostsType = {
    posts: Array<PostType>
    addPost: (newMessage: string) => void
}

export const MyPosts: React.FC<MyPostsType> = (props) => {

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

