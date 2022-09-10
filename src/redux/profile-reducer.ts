import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

const PROFILE_ADD_POST = "ADD-POST"
const PROFILE_SET_USER_PROFILE = "PROFILE-SET-USER-PROFILE"
const PROFILE_TOGGLE_ISFETCHING = 'PROFILE/TOGGLE_ISFETCHING'


const initialState: ProfileStateType = {

    posts: [
        {id: 1, message: "Dude!", likesCount: 1, disLikesCount: 2, published: "7/13/2022, 11:46:03 AM"},
        {id: 2, message: "What\'s ap man?", likesCount: 3, disLikesCount: 4, published: "7/13/2022, 11:47:03 AM"},
    ],
    userProfile: null,
    isFetching: false
}


export const profileReducer = (state = initialState, action: ProfileActionType): ProfileStateType => {
    switch (action.type) {
        case PROFILE_ADD_POST :
            return {
                ...state,
                posts: [
                    ...state.posts, {
                        id: 100,
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
        default:
            return state
    }
};

export const addPostAC = (postMessage: string) => {
    return {type: PROFILE_ADD_POST, postMessage} as const
}

export const setUser = (userProfile: UserProfileType) => {
    return {type: PROFILE_SET_USER_PROFILE, userProfile} as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {type: PROFILE_TOGGLE_ISFETCHING, isFetching} as const
}

export const getUserProfileTC = (userId: string) => (dispatch: Dispatch) => {
    toggleIsFetching(true)
    usersAPI.getProfile(userId).then((res) => {
        dispatch(setUser(res.data))
        dispatch(toggleIsFetching(false))
    })
}

type ProfileActionType = ReturnType<typeof addPostAC>
    | ReturnType<typeof setUser>
    | ReturnType<typeof toggleIsFetching>


export type ProfileStateType = {
    posts: PostType[]
    userProfile: UserProfileType | null
    isFetching: boolean
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