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

    // const [value, setValue] = useState<string>('');
    // как в видео #33 у Димыча не работало, поэтому сделал локальный стэйт, чтобы очищать textarea

    const addPost = () => {
        let text = newPostElement.current?.value
        text &&  props.addPost(text);
        // setValue('')
    }

    // const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
    //     setValue(e.currentTarget.value)
    // }

    let text = newPostElement.current?.value

    const onChangeHandler = () => {
        // text && props.updateNewPostText(text)
    }
    console.log(props.posts)

    return (
        <>
            <div>
                <textarea name="post"
                          value={text}
                          ref={newPostElement}
                          onChange={onChangeHandler}
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

