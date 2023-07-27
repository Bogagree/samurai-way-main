import React, {FC} from "react";
import {UserType} from "../../redux/users-reducer";
import {Paginator} from "../Common/Paginator/Paginator";
import {User} from "./User";

type UsersComponentPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    toggleFollow: (userId: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: number[]
    toggleFollowUserTC: (userId: number, isFollowed: boolean) => void
}

export const Users: FC<UsersComponentPropsType> = (
    {
        users,
        totalUsersCount,
        pageSize,
        currentPage,
        onPageChanged,
        toggleFollowUserTC,
        toggleFollowingProgress,
        toggleFollow,
        followingInProgress
    }) => {

    return (
        <div style={{padding: '15px'}}>
            <h1>Users</h1>
            <Paginator
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                portionSize={10}
            />
            {
                users.map(u => <User
                    key={u.id}
                    user={u}
                    toggleFollow={toggleFollow}
                    toggleFollowingProgress={toggleFollowingProgress}
                    followingInProgress={followingInProgress}
                    toggleFollowUserTC={toggleFollowUserTC}/>)
            }
        </div>
    )
}