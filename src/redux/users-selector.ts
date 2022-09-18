import {AppRootStateType} from "./redux-store";

export const getUsers = (state: AppRootStateType) => {
    return state.usersPage.users
}
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
