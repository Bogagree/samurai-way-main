import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const AUTH_SET_USER_DATA = 'AUTH/SET-USER-DATA'

const initialState: AuthStateType = {
    userData: {
        id: null,
        email: null,
        login: null
    },
    isAuth: false
}

export const authReducer = (state = initialState, action: AuthActionType): AuthStateType => {
    switch (action.type) {
        case AUTH_SET_USER_DATA :
            return {
                userData: {...state, ...action.payload},
                isAuth: true
            }

        default:
            return state
    }
}

type AuthActionType =
    ReturnType<typeof setUserData>

export const setUserData = (data: UserAuthDataType) => {
    return {type: AUTH_SET_USER_DATA, payload: {...data}} as const
}

export const getUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setUserData(res.data.data))
            }
        })
}


export type AuthStateType = {
    userData: UserAuthDataType
    isAuth: boolean
}

export type UserAuthDataType = {
    id: number | null
    login: string | null
    email: string | null
}

