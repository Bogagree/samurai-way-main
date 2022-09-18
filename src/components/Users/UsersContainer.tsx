import React from 'react';
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {
    requestUsersTC,
    setCurrentPage,
    toggleFollow,
    toggleFollowingProgress, toggleFollowUserTC,
    UsersStateType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getUsers, getUsersCurrentPage, getUsersTotalCount} from "../../redux/users-selector";
import {getUsersPageSize} from "../../redux/users-selector";
import {getUsersIsFetching} from "../../redux/users-selector";
import {getUsersFollowingInProgress} from "../../redux/users-selector";

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.requestUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.requestUsersTC(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                toggleFollow={this.props.toggleFollow}
                pageSize={this.props.pageSize}
                totalCount={this.props.totalCount}
                followingInProgress={this.props.followingInProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                toggleFollowUserTC={this.props.toggleFollowUserTC}
            />
        </>
    }
}

// const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalCount: state.usersPage.totalCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getUsersPageSize(state),
        totalCount:getUsersTotalCount(state),
        currentPage: getUsersCurrentPage(state),
        isFetching: getUsersIsFetching(state),
        followingInProgress: getUsersFollowingInProgress(state)
    }
}



export default compose<React.ComponentType>(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {
    toggleFollow, toggleFollowingProgress, setCurrentPage, requestUsersTC, toggleFollowUserTC
})
)(UsersContainer)

export type UsersContainerPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = UsersStateType

type MapDispatchPropsType = {
    toggleFollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    requestUsersTC: (currentPage: number, pageSize: number) => void
    toggleFollowUserTC: (userId:number, isFollowed:boolean) => void
}
