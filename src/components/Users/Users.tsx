import style from "./Users.module.css";
import defaultAvatar from "../../assets/images/avatars/2.png";
import React from "react";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


type UsersComponentPropsType = {
    users: UserType[]
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    isFollowed: (userId: number) => void
}

export const Users = (props: UsersComponentPropsType) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= (pagesCount < 10 ? pagesCount : 10); i++) {
        pages.push(i)
    }

    return (
        <div style={{padding: '15px'}}>
            <h1>Users</h1>
            <div>
                {pages.map(p => {
                    return <span
                        key={p}
                        className={props.currentPage === p ? style.pageNumber + ' ' + style.selectedPage : style.pageNumber}
                        onClick={() => {
                            props.onPageChanged(p)
                        }}
                    >
                            {p}</span>
                })}
                <strong>total users pages</strong>: {pagesCount}
            </div>
            {
                props.users.map(u => {
                    return <div key={u.id}>
                        <div style={{display: 'flex', padding: '5px'}}>
                            <div>
                                <div className={style.ava_container}>
                                    <NavLink to={'/profile/'+ u.id}>
                                        <img
                                        src={u.photos.small ? `${u.photos.small}` : defaultAvatar}
                                        alt="user_foto" className={style.avatar}
                                    /></NavLink>
                                </div>
                                <button
                                    onClick={() => props.isFollowed(u.id)}> {u.followed ? 'Follow' : 'UnFollow'}</button>
                            </div>
                            <div style={{padding: '5px'}}>
                                <strong>name</strong>: {u.name}
                                <br/>
                                <strong><i>status</i></strong>: {u.status}
                                <br/>
                                <hr/>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}