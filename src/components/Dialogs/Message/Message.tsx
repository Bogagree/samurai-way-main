import React from "react";
import style from './../Dialogs.module.css'
import {MessageType} from "../../../redux/dialogs-reducer";

type PropsType = {
    messagePage: MessageType
}

export const Message: React.FC<PropsType> = (props) => {
    return (
        <div className={style.message}>{props.messagePage.message}</div>
    )
}
