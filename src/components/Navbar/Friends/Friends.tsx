import React from "react";
import style from "./Friends.module.css"
import {FriendType} from "../../../redux/state";
import {Friend} from "./Friend/Friend";
import Dimych_B from '../../../assets/images/avatars/friends/Dimych_B.jpg'
import Natasha from '../../../assets/images/avatars/friends/Natasha.jpg'
import Gleb from '../../../assets/images/avatars/friends/Gleb.jpg'
import Alisa from '../../../assets/images/avatars/friends/Alisa.jpg'
import Tosik from '../../../assets/images/avatars/friends/Tosik.jpg'
import Rigik_the_cat from '../../../assets/images/avatars/friends/Rigik_the_cat.jpg'
import Vova_P from '../../../assets/images/avatars/friends/Vova_P.jpg'
import Dima_M from '../../../assets/images/avatars/friends/Dima_M.jpg'
import Joseph_B from '../../../assets/images/avatars/friends/Joseph_B.jpg'


type FriendsPropsType = {
    friends: Array<FriendType>
    // friendFoto: Array<string>
}

const friendsAvatars = ['', Dimych_B, Natasha, Gleb, Alisa, Tosik, Rigik_the_cat, Vova_P, Dima_M, Joseph_B]


export const Friends: React.FC<FriendsPropsType> = (props) => {

    return (
        <div className={style.wrapper}>
            <div className={style.friends}>
            {props.friends.map(
                f => <Friend  key={f.id} id={f.id} fotoSrc={friendsAvatars[f.id]} name={f.name}/>)}
            </div>
            </div>
    )

}