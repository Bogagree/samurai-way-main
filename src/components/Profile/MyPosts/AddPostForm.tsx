import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type PostsFormDataType = {
    postMessage: string
}

export const AddPostForm: React.FC<InjectedFormProps<PostsFormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="postMessage"
                   placeholder={'add post message'}
                   component={'textarea'}
                 >
            </Field>
            <button>add post</button>
        </form>
    )
}

export const AddPostMessageReduxForm = reduxForm<PostsFormDataType>(
    {form: 'profileAddPostForm'}
)(AddPostForm)