import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import style from "./Dialogs.module.css";

export type DialogsFormDataType = {
    message: string
}


export const AddMessageForm: React.FC<InjectedFormProps<DialogsFormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="message"
                   placeholder={'add message'}
                   component={'textarea'}
                   className={style.textArea}>
            </Field>
            <button>send message</button>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm<DialogsFormDataType>(
    {form: 'dialogAddMessageForm'}
)(AddMessageForm)