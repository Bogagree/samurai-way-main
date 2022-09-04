const initialState: UsersStateType = {
    users: []
}

export const usersReducer = (state = initialState, action: UsersActionType): UsersStateType => {
    switch (action.type) {
        case 'USERS/FOLLOW-UNFOLLOW' :
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)
            }
        case 'USERS/SET-USER' :
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

type UsersActionType =
    ReturnType<typeof followUnFollowAC>
    | ReturnType<typeof setUsersAC>

export const followUnFollowAC = (userId: number) => {
    return {type: 'USERS/FOLLOW-UNFOLLOW', userId} as const
}

export const setUsersAC = (users: UserType[]) => {
    return {type: 'USERS/SET-USER', users} as const
}

export type UsersStateType = {
    users: UserType[]
}

export type UserType = {
    id: number
    fullName: string
    status: string
    location: {
        country: string
        city: string
    }
    photos?: {
        small: string | null
        large: string | null
    }
    followed: boolean

}