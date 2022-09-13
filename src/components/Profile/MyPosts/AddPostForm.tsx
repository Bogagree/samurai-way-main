import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {maxLength20, minLength3, required} from "../../../utils/validators/validators";
import {createField, Textarea} from "../../Common/FormsControls/FormsControls";

export type PostsFormDataType = {
    postMessage: string
}

export const AddPostForm: React.FC<InjectedFormProps<PostsFormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            {/*<Field*/}
            {/*    name="postMessage"*/}
            {/*    placeholder={'add post message'}*/}
            {/*    component={Textarea}*/}
            {/*    validate={[required, maxLength10]}*/}
            {/*>*/}
            {/*</Field>*/}
            {createField('add message', 'postMessage',[required, maxLength20, minLength3], Textarea)}
            <button>add post</button>
        </form>
    )
}

export const AddPostMessageReduxForm = reduxForm<PostsFormDataType>(
    {form: 'profileAddPostForm'}
)(AddPostForm)