const USERS_FOLLOW_UNFOLLOW = 'USERS/FOLLOW-UNFOLLOW'
const USERS_SET_USERS = 'USERS/SET-USER'
const USERS_SET_CURRENT_PAGE = 'USERS/SET-CURRENT-PAGE'
const USERS_SET_TOTAL_COUNT = 'USERS/SET-TOTAL-COUNT'

const initialState: UsersStateType = {
    users: [],
    pageSize: 15,
    totalCount: 0,
    currentPage: 1
}

export const usersReducer = (state = initialState, action: UsersActionType): UsersStateType => {
    switch (action.type) {
        case USERS_FOLLOW_UNFOLLOW :
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)
            }
        case USERS_SET_USERS :
            return {
                ...state,
                users: [...action.users]
            }
        case USERS_SET_CURRENT_PAGE :
            return {
                ...state,
                currentPage: action.currentPage
            }
            case USERS_SET_TOTAL_COUNT :
            return {
                ...state,
                totalCount: action.totalCount
            }
        default:
            return state
    }
}

type UsersActionType =
    ReturnType<typeof followUnFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
| ReturnType<typeof setTotalCountAC>

export const followUnFollowAC = (userId: number) => {
    return {type: USERS_FOLLOW_UNFOLLOW, userId} as const
}

export const setUsersAC = (users: UserType[]) => {
    return {type: USERS_SET_USERS, users} as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {type: USERS_SET_CURRENT_PAGE, currentPage} as const
}

export const setTotalCountAC = (totalCount: number) => {
    return {type: USERS_SET_TOTAL_COUNT, totalCount} as const
}



export type UsersStateType = {
    users: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string | null
        large: string | null
    }
    followed: boolean

}
