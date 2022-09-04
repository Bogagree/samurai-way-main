import React from 'react';
import style from "./Users.module.css";
import defaultAvatar from "../../assets/images/avatars/2.png";
import {UserType} from "../../redux/users-reducer";
import axios from "axios";

type UsersPropsType = {
    users: UserType[]
    isFollowed: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount:number) => void
    pageSize: number
    totalCount: number
    currentPage: number
}


class UsersC extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalCount(res.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
        )
            .then((res) => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= (pagesCount < 10 ? pagesCount : 10 ); i++) {
            pages.push(i)
        }


        console.log(pages.length)
        return (
            <div style={{padding: '15px'}}>
                <h1>Users</h1>
                <div>
                    {pages.map(p => {
                        return <span
                            key={p}
                            className={this.props.currentPage === p ? style.pageNumber + ' ' + style.selectedPage : style.pageNumber}
                            onClick={() => {this.onPageChanged(p)}}
                        >
                            {p}</span>
                    })}
                    <strong>total users pages</strong>: { pagesCount}
                </div>
                {
                    this.props.users.map(u => {
                        // if (u.photos.small !== null)
                        return <div key={u.id}>
                            <div style={{display: 'flex', padding: '5px'}}>
                                <div>
                                    <div className={style.ava_container}><img
                                        src={u.photos.small ? `${u.photos.small}` : defaultAvatar}
                                        alt="user_foto" className={style.avatar}/></div>
                                    <button
                                        onClick={() => this.props.isFollowed(u.id)}> {u.followed ? 'Follow' : 'UnFollow'}</button>
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
}

export default UsersC;