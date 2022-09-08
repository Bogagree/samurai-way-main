import React from 'react';
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleFollow, toggleFollowingProgress,
    toggleIsFetching,
    UsersStateType,
    UserType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers()
            .then((data) => {
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
                this.props.toggleIsFetching(false)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber)
            .then((data) => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
            })
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
            />
        </>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         isFollowed: (userId: number) => {
//             dispatch(followUnFollowAC(userId))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalCount: (totalCount: number) => {
//             dispatch(setTotalCountAC(totalCount))
//         },
//
//     }
// }


export default connect(mapStateToProps, {
    toggleFollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching, toggleFollowingProgress
})(UsersContainer)

export type UsersContainerPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = UsersStateType

type MapDispatchPropsType = {
    toggleFollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    setUsers: (users: UserType[]) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching:boolean, userId: number ) => void
}
