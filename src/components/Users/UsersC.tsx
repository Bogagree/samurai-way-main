import React from 'react';
import style from "./Users.module.css";
import defaultAvatar from "../../assets/images/avatars/2.png";
import {UserType} from "../../redux/users-reducer";
import axios from "axios";

type UsersPropsType = {
    users: UserType[]
    isFollowed: (userId: number) => void
    setUsers: (users: UserType[]) => void
}


class UsersC extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=10&page=1',
        )
            .then((res) => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return (
            <div style={{padding: '15px'}}>
                <h1>Users</h1>

                <div><span>1</span><span className={style.selectedPage}>2</span><span>3</span><span>4</span><span>5</span></div>
                {/*<button onClick={this.getUsers}>get users</button>*/}
                {
                    this.props.users.map(u => {
                        if (u.photos.small !== null)
                            return <div key={u.id}>
                                <div style={{display: 'flex', padding: '5px'}}>
                                    <div>
                                        <div className={style.ava_container}><img
                                            src={u.photos.small !== null ? `${u.photos.small}` : defaultAvatar}
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