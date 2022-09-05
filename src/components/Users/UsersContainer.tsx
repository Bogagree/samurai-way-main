import React from 'react';
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {
    followUnFollow,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleIsFetching,
    UsersStateType,
    UserType
} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader";


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalCount(res.data.totalCount)
                this.props.toggleIsFetching(false)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
        )
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.toggleIsFetching(false)
            })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/>: null}
            <Users
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                isFollowed={this.props.followUnFollow}
                pageSize={this.props.pageSize}
                totalCount={this.props.totalCount}
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
        isFetching: state.usersPage.isFetching
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
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalCount: (totalCount: number) => {
//             dispatch(setTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, {
  followUnFollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching
})(UsersContainer)

// export type UsersPropsType = MapStatePropsType & MapDispatchPropsType
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = UsersStateType

type MapDispatchPropsType = {
    followUnFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
