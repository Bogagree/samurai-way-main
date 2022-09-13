import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {LoginFormDataType} from "../components/Login/LoginForm";

const AUTH_SET_USER_DATA = 'AUTH/SET-USER-DATA'

const initialState: AuthStateType = {
    userData: {
        id: null,
        email: null,
        password: null
    },
    isAuth: false
}

export const authReducer = (state = initialState, action: AuthActionType): AuthStateType => {
    switch (action.type) {
        case AUTH_SET_USER_DATA :
            return {
                ...state,
                userData: {...state, password: action.payload.login, email:action.payload.email, id:action.payload.userId},
                isAuth: action.payload.isAuth
            }
        default:
            return state
    }
}

type AuthActionType =
    ReturnType<typeof setUserData>

// export const setUserData = (data: UserAuthDataType) => {
//     return {type: AUTH_SET_USER_DATA, payload: {...data}} as const
// }
export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {type: AUTH_SET_USER_DATA, payload: {userId, email, login, isAuth}} as const
}

export const getUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setUserData(res.data.data.id, res.data.data.email, res.data.data.login, true))
            }
        })
}

export const loginTC = (data: LoginFormDataType) => (dispatch: Dispatch<AuthActionType>) => {
    authAPI.login(data)
        .then((res) => {
            if (res.data.resultCode === 0) {
                // dispatch(getUserData())
                authAPI.me()
                    .then((res) => {
                        if (res.data.resultCode === 0) {
                            dispatch(setUserData(res.data.data.userId, data.email, data.password, true))
                        }
                    })
            }
        })
}

export const logoutTC = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then((res)=> {
            if (res.data.resultCode === 0) {
                dispatch(setUserData(null,null,null,false))
            }
        })
}

export type AuthStateType = {
    userData: UserAuthDataType
    isAuth: boolean
}

export type UserAuthDataType = {
    id: number | null
    password: string | null
    email: string | null
}