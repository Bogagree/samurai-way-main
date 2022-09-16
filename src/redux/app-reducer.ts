import {getUserData} from "./auth-reducer";
import {AppThunk} from "./redux-store";
import {bottomNavigationActionClasses} from "@mui/material";

const APP_SET_INITIALIZED = 'APP-SET-INITIALIZED'

const initialState: AppStateType = {
    initialized: false
}

export const appReducer = (state = initialState, action: AppActionType): AppStateType => {
    switch (action.type) {
        case APP_SET_INITIALIZED :
            return {
                ...state,
                initialized: action.init
            }
        default:
            return state
    }
}

export const initializationSuccessful = (init: boolean) => {
    return {type: APP_SET_INITIALIZED, init} as const
}
export const initializeApp = ():AppThunk => (dispatch) => {
    let promise = dispatch(getUserData())
    Promise.all([promise])
        .then( () => {
            dispatch (initializationSuccessful(true))
        })
}

export type AppStateType = {
    initialized: boolean
}

type AppActionType =
    ReturnType<typeof initializationSuccessful>