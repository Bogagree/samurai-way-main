import React from "react";
import style from "./Friends.module.css"
import {FriendType} from "../../../redux/state";
import {Friend} from "./Friend/Friend";

type FriendsPropsType = {
    friends: Array<FriendType>
}

export const Friends: React.FC<FriendsPropsType> = (props) => {

    return (
        <div className={style.friends__wrapper}>
            {props.friends.map(
                f => <Friend id={f.id} fotoSrc={f.fotoSrc} name={f.name} /> )}
        </div>
    )

}