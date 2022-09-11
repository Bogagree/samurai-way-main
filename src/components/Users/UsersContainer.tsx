import React from 'react';
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {
    getUsers,
    setCurrentPage,
    toggleFollow,
    toggleFollowingProgress, toggleFollowUserTC,
    UsersStateType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
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


export default withAuthRedirect(connect(mapStateToProps, {
    toggleFollow, toggleFollowingProgress, setCurrentPage, getUsers, toggleFollowUserTC
})(UsersContainer))

export type UsersContainerPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = UsersStateType

type MapDispatchPropsType = {
    toggleFollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    toggleFollowUserTC: (userId:number, isFollowed:boolean) => void
}
