import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const PROFILE_ADD_POST = "ADD-POST"
const PROFILE_SET_USER_PROFILE = "PROFILE-SET-USER-PROFILE"
const PROFILE_TOGGLE_ISFETCHING = 'PROFILE/TOGGLE_ISFETCHING'
const PROFILE_SET_STATUS = 'PROFILE/SET_STATUS'


const initialState: ProfileStateType = {

    posts: [
        {id: 1, message: "Dude!", likesCount: 1, disLikesCount: 2, published: "7/13/2022, 11:46:03 AM"},
        {id: 2, message: "What\'s ap man?", likesCount: 3, disLikesCount: 4, published: "7/13/2022, 11:47:03 AM"},
    ],
    userProfile: null,
    isFetching: false,
    status: ''
}


export const profileReducer = (state = initialState, action: ProfileActionType): ProfileStateType => {
    switch (action.type) {
        case PROFILE_ADD_POST :
            return {
                ...state,
                posts: [
                    ...state.posts, {
                        id: 100+Math.floor(1000*Math.random()), // костыль
                        message: action.postMessage,
                        likesCount: 100,
                        disLikesCount: 50,
                        published: new Date().toLocaleString()
                    }
                ]
            }
        case PROFILE_SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            }
        case PROFILE_TOGGLE_ISFETCHING :
            return {
                ...state,
                isFetching: action.isFetching
            }
        case PROFILE_SET_STATUS :
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
};

export const addPost = (postMessage: string) => {
    return {type: PROFILE_ADD_POST, postMessage} as const
}

export const setUser = (userProfile: UserProfileType) => {
    return {type: PROFILE_SET_USER_PROFILE, userProfile} as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {type: PROFILE_TOGGLE_ISFETCHING, isFetching} as const
}
export const setUserStatus = (status: string) => {
    return {type: PROFILE_SET_STATUS, status} as const
}

export const getUserProfileTC = (userId: string) => (dispatch: Dispatch) => {
    toggleIsFetching(true)
    usersAPI.getProfile(userId).then((res) => {
        dispatch(setUser(res.data))
        dispatch(toggleIsFetching(false))
    })
}
export const getUserStatusTC = (userId: string) => (dispatch: Dispatch) => {
    toggleIsFetching(true)
    profileAPI.getUserStatus(+userId).then((res) => {
        dispatch(setUserStatus(res.data))
        dispatch(toggleIsFetching(false))
    })
}
export const updateUserStatusTC = (status: string) => (dispatch: Dispatch) => {
    toggleIsFetching(true)
    profileAPI.updateStatus(status).then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setUserStatus(status))
            dispatch(toggleIsFetching(false))
        }
    })
}

type ProfileActionType = ReturnType<typeof addPost>
    | ReturnType<typeof setUser>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserStatus>


export type ProfileStateType = {
    posts: PostType[]
    userProfile: UserProfileType | null
    isFetching: boolean
    status: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
    disLikesCount: number
    published: string
}

export type UserProfileType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: {
        small: string
        large: string
    }
}

export type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    github: string | null
    instagram: string | null
    youtube: string | null
    mainLink: string | null
}