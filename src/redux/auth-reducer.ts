import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {LoginFormDataType} from "../components/Login/LoginForm";
import {stopSubmit} from "redux-form";

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
                userData: {
                    ...action.payload
                },
                isAuth: action.payload.isAuth
            }
        default:
            return state
    }
}


export const setUserData = (data: UserAuthDataType, isAuth: boolean) => {
    return {type: AUTH_SET_USER_DATA, payload: {...data, isAuth}} as const
}

export const getUserData = () => (dispatch: Dispatch) => {
    return authAPI.me()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setUserData(res.data.data, true))
            }
        })
}

export const loginTC = (data: LoginFormDataType) => (dispatch: Dispatch) => {
    authAPI.login(data)
        .then((res) => {
            if (res.data.resultCode === 0) {
                authAPI.me()
                    .then((res) => {
                        if (res.data.resultCode === 0) {
                            dispatch(setUserData(res.data.data, true))
                        }
                    })
            } else {
                let message = res.data.messages[0]
                let action = stopSubmit('login', {_error: message})
                dispatch(action)
            }
        })
}

export const logoutTC = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setUserData({email: null, password: null, id: null}, false))
            }
        })
}

export type AuthStateType = {
    userData: UserAuthDataType
    isAuth: boolean
}

export type AuthActionType =
    ReturnType<typeof setUserData>

export type UserAuthDataType = {
    id: number | null
    password: string | null
    email: string | null
}