import {FriendType} from "../../../../redux/state";
import React from "react";
import style from "./../Friends.module.css"


type FriendPropsType = FriendType

export const Friend: React.FC<FriendPropsType> = (props) => {
  return (
      <div className={style.friend}>

          <img src={props.fotoSrc} alt="friend foto" className={style.friend__ava}/>

          <p className={style.friend__name}>{props.name}</p>

      </div>
  )
}
