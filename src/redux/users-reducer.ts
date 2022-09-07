const USERS_TOGGLE_FOLLOW = 'USERS/TOGGLE-FOLLOW'
const USERS_SET_USERS = 'USERS/SET-USER'
const USERS_SET_CURRENT_PAGE = 'USERS/SET-CURRENT-PAGE'
const USERS_SET_TOTAL_COUNT = 'USERS/SET-TOTAL-COUNT'
const USERS_TOGGLE_ISFETCHING = 'USERS/TOGGLE_ISFETCHING'

const initialState: UsersStateType = {
    users: [],
    pageSize: 15,
    totalCount: 0,
    currentPage: 1,
    isFetching: false
}

export const usersReducer = (state = initialState, action: UsersActionType): UsersStateType => {
    switch (action.type) {
        case USERS_TOGGLE_FOLLOW :
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
        case USERS_TOGGLE_ISFETCHING :
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

type UsersActionType =
    ReturnType<typeof toggleFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof toggleIsFetching>

export const toggleFollow = (userId: number) => {
    return {type: USERS_TOGGLE_FOLLOW, userId} as const
}

export const setUsers = (users: UserType[]) => {
    return {type: USERS_SET_USERS, users} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: USERS_SET_CURRENT_PAGE, currentPage} as const
}
export const setTotalCount = (totalCount: number) => {
    return {type: USERS_SET_TOTAL_COUNT, totalCount} as const
}
export const toggleIsFetching = (isFetching:boolean) => {
    return {type: USERS_TOGGLE_ISFETCHING, isFetching} as const
}


export type UsersStateType = {
    users: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
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
