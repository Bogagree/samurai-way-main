import {Dispatch} from "redux";

const PHOTOS_ADD_PHOTO = "PROFILE/ADD-POST"


const initialState: PhotosStateType = {} as PhotosStateType


export const photosReducer = (state = initialState, action: NewsActionType): PhotosStateType => {
    switch (action.type) {
        case PHOTOS_ADD_PHOTO :
            return {
                ...state,
                photo: {...action.photo}
            }
        default:
            return state
    }
};


export const setPhotos = (photo: PhotoType) => {
    return {type: PHOTOS_ADD_PHOTO, photo} as const
}

export const getPhotosTC = (user: number) => (dispatch: Dispatch) => {
    fetch('https://api.slingacademy.com/v1/sample-data/photos/2')
        .then((response) => response.json())
        .then((data: PhotoType) => {
            setPhotos(data)
        })
}


type NewsActionType = ReturnType<typeof setPhotos>

export type PhotoType = {
    description: string
    id: number
    title: string
    url: string
    user: number
}

export type PhotosStateType = {
    photo: PhotoType
}