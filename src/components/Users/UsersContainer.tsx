import React from 'react';
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {followUnFollowAC, setUsersAC, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import UsersC from "./UsersC";


const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        isFollowed: (userId: number) => {
            dispatch(followUnFollowAC(userId))
    },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)

type MapStatePropsType = {
    users: UserType[],
}

type MapDispatchPropsType = {
    isFollowed: (userId:number) => void
    setUsers: (users: UserType[]) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType