import React from 'react';
import {UsersContainerPropsType} from "./UsersContainer";
import axios from "axios";
import defaultAvatar from '../../assets/images/avatars/2.png';
import style from './Users.module.css'

const UsersFunctional: React.FC<UsersContainerPropsType> = (props) => {

    if (props.users.length === 0)
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=5',
        )
            .then((res) => {
                props.setUsers(res.data.items)
            })
        // props.setUsers([
        //     {
        //         id: 1,
        //         fullName: 'Dimych B',
        //         status: 'Coding my Samurai Way',
        {/*        location: {*/}
        {/*            country: 'Russia',*/}
        {/*            city: 'Taganrog'*/}
        {/*        },*/}
        {/*        photos: {*/}
        //             small: null,
        //             large: null
        //         },
        {/*        followed: true*/}
        //     },
        //     {
        //         id: 2,
        //         fullName: 'Natasha',
        //         status: 'Sending request to the Universe',
        //         location: {
        //             country: 'Russia',
        //             city: 'Vladivostok'
        //         },
        //         photos: {
        //             small: null,
        //             large: null
        //         },
        //         followed: true
        //     },
        //     {
        {/*        id: 3,*/}
        {/*        fullName: 'Nikitos',*/}
        {/*        status: "I'm businessman",*/}
        {/*        location: {country: 'Turkey', city: 'Antalya'},*/}
        {/*        followed: true,*/}
        {/*    },*/}
        {/*    {*/}
        //         id: 4,
        //         fullName: 'Dmitry_K',
        //         status: "I'm coder",
        //         location: {country: 'Belarus', city: 'Minsk'},
        //         followed: true,
        //         photos: {
        //             small: null,
        //             large: null
        {/*        },*/}
        //     },
        //     {
        //         id: 5,
        //         fullName: 'Tosik',
        //         status: "Kolhoznik and organic farmer",
        //         location: {country: 'Russia', city: 'Mostovskoy'},
        //         followed: true
        //     }
        //
        // ])

    return (
        <div style={{padding: '15px'}}>
            <h1>Users</h1>
            {
                props.users.map(u => <div key={u.id}>
                    <div style={{display: 'flex', padding: '5px'}}>
                        <div>
                            <div className={style.ava_container}><img src={ u.photos.small !== null ? `${u.photos.small}` : defaultAvatar} alt="user_foto" className={style.avatar}/></div>
                            <button
                                onClick={() => props.followUnFollow(u.id)}> {u.followed ? 'Follow' : 'UnFollow'}</button>
                        </div>
                        <div style={{padding: '5px'}}>
                            <strong>name</strong>: {u.name}
                            <br/>
                            <strong><i>status</i></strong>: {u.status}
                            <br/>
                            <hr/>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};
