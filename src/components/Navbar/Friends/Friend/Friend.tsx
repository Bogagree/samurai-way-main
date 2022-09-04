import React from "react";
import style from "./../Friends.module.css"
import {FriendType} from "../../../../redux/navbar-reducer";

export const Friend: React.FC<FriendType> = (props) => {
  return (
      <div className={style.friend}>

          <img src={props.fotoSrc} alt="friend foto" className={style.friend__ava}/>

          <p className={style.friend__name}>{props.name}</p>

      </div>
  )
}
