import React from "react";
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type PropsType = {
    dialogPage: DialogsPageType
    addMessage: (newMessage: string) => void
}

export const Dialogs: React.FC<PropsType> = (props) => {

    let newMessage = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        let text = newMessage.current?.value
        text && props.addMessage(text)
    }

    return (
        <div className={style.dialogs}>

            <div className={style.dialogs_items}>

                {props.dialogPage.dialogs.map((dialog, index) =>
                    <DialogItem
                        key={index}
                        id={dialog.id}
                        name={dialog.name}
                    />)}
            </div>

            <div className={style.messages}>

                {props.dialogPage.messagesPage.map(m =>
                    <Message
                        key={m.id}
                        messagePage={m}
                    />)}

                <div className={style.sendMessage}>
                    <textarea name="post"
                              ref={newMessage}
                              placeholder={'add message'}
                              className={style.textArea}>

                    </textarea>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>


        </div>
    )
}