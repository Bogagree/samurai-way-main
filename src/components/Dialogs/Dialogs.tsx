import React from "react";
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "./../../redux/state"

type PropsType = {
    dialogPage: DialogsPageType
}

export const Dialogs: React.FC<PropsType> = (props) => {

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>

                {props.dialogPage.dialogs.map( (dialog, index) =>
                    <DialogItem
                        key={index}
                        id={dialog.id}
                        name={dialog.name}
                    />)}
            </div>

            <div className={style.messages}>

                {props.dialogPage.messagesPage.map( m =>
                    <Message
                        key={m.id}
                        messagePage={m}
                    />)}
            </div>
        </div>
    )
}