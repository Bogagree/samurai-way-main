import React from 'react';
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {followUnFollowAC, setUsersAC, UsersStateType, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {Users} from "./Users";


const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        usersPage: state.users
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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

type MapStatePropsType = {
    usersPage: UsersStateType,
}

type MapDispatchPropsType = {
    isFollowed: (userId:number) => void
    setUsers: (users: UserType[]) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType