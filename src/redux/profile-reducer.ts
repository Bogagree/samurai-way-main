export const ADD_POST = "ADD-POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const initialState: ProfileStateType = {
    dialogsPage:
        {
            posts: [
                {id: 1, message: "Dude!", likesCount: 1, disLikesCount: 2, published: "7/13/2022, 11:46:03 AM"},
                {
                    id: 2,
                    message: "What\'s ap man?",
                    likesCount: 3,
                    disLikesCount: 4,
                    published: "7/13/2022, 11:47:03 AM"
                },
                // {id: 3, message: "Yo, bro!", likesCount: 5, disLikesCount: 6, published: "7/13/2022, 11:48:03 AM"},
                // {id: 4, message: "Yo, yo bro!", likesCount: 7, disLikesCount: 8, published: "7/13/2022, 11:49:03 AM"},
            ],
        }
}

export const profileReducer = (state = initialState, action: ProfileActionType): ProfileStateType => {
    switch (action.type) {
        case ADD_POST :
            return {
                ...state,
                dialogsPage: {
                    posts: [...state.dialogsPage.posts,
                        {
                            id: 6,
                            message: action.postMessage,
                            likesCount: 0,
                            disLikesCount: 0,
                            published: new Date().toLocaleString()
                        }]
                }
            }
        default:
            return state
    }
};

export const addPostAC = (postMessage: string) => {
    return {type: ADD_POST, postMessage} as const
}

type ProfileActionType = ReturnType<typeof addPostAC>

export type ProfileStateType = {
    dialogsPage: {
        posts: PostType[]
    }
}

export type PostType = {
    id: number
    message: string
    likesCount: number
    disLikesCount: number
    published: string
}