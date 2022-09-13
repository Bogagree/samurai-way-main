import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Textarea} from "../Common/FormsControls/FormsControls";
import {maxLength20, minLength3, required} from "../../utils/validators/validators";

export type DialogsFormDataType = {
    message: string
}


export const AddMessageForm: React.FC<InjectedFormProps<DialogsFormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            {/*<Field name="message"*/}
            {/*       placeholder={'add message'}*/}
            {/*       component={Textarea}*/}
            {/*       className={style.textArea}*/}
            {/*       validate={[]}*/}
            {/*>*/}
            {/*</Field>*/}
            {createField('add post message', 'message',[required, maxLength20, minLength3], Textarea)}
            <button>send message</button>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm<DialogsFormDataType>(
    {form: 'dialogAddMessageForm'}
)(AddMessageForm)