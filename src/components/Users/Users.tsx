import React from 'react';
import {UsersPropsType} from "./UsersContainer";

export const Users: React.FC<UsersPropsType> = (props) => {

    if (props.usersPage.users.length === 0)
        props.setUsers([
            {
                id: 1,
                name: 'Dimych B',
                status: 'Coding my Samurai Way',
                photos: {
                    small:  null,
                    large:  null
                },
                followed: true
            },
            {
                id: 2,
                name: 'Natasha',
                status: 'Sending request to the Universe',
                photos: {
                    small:  null,
                    large:  null
                },
                followed: true
            }
        ])

    return (
        <div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        name: {u.name}
                        <br/>
                        status: {u.status}
                    </span>
                </div>)
            }
        </div>
    );
};
