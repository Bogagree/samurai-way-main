import React from "react";
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/dialogs-reducer";
import {AddMessageReduxForm, DialogsFormDataType,} from "./AddMessageForm";

type PropsType = {
    dialogPage: {
        dialogs: DialogType[]
        messages: MessageType[]
    }
    isAuth: boolean
    addMessage: (newMessage: string) => void
}

export const Dialogs: React.FC<PropsType> = (props) => {

    const onSubmitAddNewMessage = (formData: DialogsFormDataType) => {
        console.log(formData)
        props.addMessage(formData.message)
    }

    return (
        <div className={style.dialogs}>

            <div className={style.dialogs_items}>
                {
                    props.dialogPage.dialogs.map((dialog, index) =>
                        <DialogItem
                            key={index}
                            id={dialog.id}
                            name={dialog.name}
                        />)
                }
            </div>
            <div className={style.messages}>
                {props.dialogPage.messages.map(m =>
                    <Message
                        key={m.id}
                        messagePage={m}
                    />)}
                <div className={style.sendMessage}>
                    <AddMessageReduxForm onSubmit={onSubmitAddNewMessage}/>
                </div>
            </div>
        </div>
    )
}


