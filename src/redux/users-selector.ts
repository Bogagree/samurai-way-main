import {AppRootStateType} from "./redux-store";
import {createSelector} from "reselect";
import {UserType} from "./users-reducer";

export const getUsersSelector = (state: AppRootStateType) => {
    return state.usersPage.users
}

// export const getUsersSelector = (state: AppRootStateType) => {
//     return getUsers(state).filter(u => true)
// }

export const getUsers = createSelector(
    [
        getUsersSelector,
        (state: AppRootStateType) => state.usersPage.followingInProgress,
    ],
    (users) => users.filter(u => true)
)


export const getUsersPageSize = (state: AppRootStateType) => {
    return state.usersPage.pageSize
}
export const getUsersTotalCount = (state: AppRootStateType) => {
    return state.usersPage.totalCount
}
export const getUsersIsFetching = (state: AppRootStateType) => {
    return state.usersPage.isFetching
}
export const getUsersFollowingInProgress = (state: AppRootStateType) => {
    return state.usersPage.followingInProgress
}
export const getUsersCurrentPage = (state: AppRootStateType) => {
    return state.usersPage.currentPage
}