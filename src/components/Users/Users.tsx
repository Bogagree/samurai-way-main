import React from 'react';
import {UsersPropsType} from "./UsersContainer";

export const Users: React.FC<UsersPropsType> = (props) => {

    if (props.usersPage.users.length === 0)
        props.setUsers([
            {
                id: 1,
                fullName: 'Dimych B',
                status: 'Coding my Samurai Way',
                location: {
                    country: 'Russia',
                    city: 'Taganrog'
                },
                photos: {
                    small: null,
                    large: null
                },
                followed: true
            },
            {
                id: 2,
                fullName: 'Natasha',
                status: 'Sending request to the Universe',
                location: {
                    country: 'Russia',
                    city: 'Vladivostok'
                },
                photos: {
                    small: null,
                    large: null
                },
                followed: true
            },
            {
                id: 3,
                fullName: 'Nikitos',
                status: "I'm businessman",
                location: {country: 'Turkey', city: 'Antalya'},
                followed: true,
            },
            {
                id: 4,
                fullName: 'Dmitry_K',
                status: "I'm coder",
                location: {country: 'Belarus', city: 'Minsk'},
                followed: true,
                photos: {
                    small: null,
                    large: null
                },
            },
            {
                id: 5,
                fullName: 'Tosik',
                status: "Kolhoznik and organic farmer",
                location: {country: 'Russia', city: 'Mostovskoy'},
                followed: true
            }

        ])

    return (
        <div style={{padding: '15px'}}>
            <h1>Users</h1>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <div style={{display: 'flex', padding: '5px'}}>
                        <div>
                            <div><img src="#" alt="user_foto"/></div>
                            <button
                                onClick={() => props.isFollowed(u.id)}> {u.followed ? 'Follow' : 'UnFollow'}</button>
                        </div>
                        <div style={{padding: '5px'}}>
                            <strong>name</strong>: {u.fullName}
                            <br/>
                            <strong><i>status</i></strong>: {u.status}
                            <br/>
                            country: {u.location.country}
                            <br/>
                            city: {u.location.city}
                            <hr/>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};
