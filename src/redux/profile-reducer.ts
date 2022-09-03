export const ADD_POST = "ADD-POST"
export const UPDATE_NEW_POST_TEXT = "PDATE-NEW-POST-TEXT"

const initialState = {
    posts: [
        {id: 1, message: "Dude!", likesCount: 1, disLikesCount: 2, published: "7/13/2022, 11:46:03 AM"},
        {id: 2, message: "What\'s ap man?", likesCount: 3, disLikesCount: 4, published: "7/13/2022, 11:47:03 AM"},
        // {id: 3, message: "Yo, bro!", likesCount: 5, disLikesCount: 6, published: "7/13/2022, 11:48:03 AM"},
        // {id: 4, message: "Yo, yo bro!", likesCount: 7, disLikesCount: 8, published: "7/13/2022, 11:49:03 AM"},
    ],
    newPost: 'IT-kamasutra.com'
}

//@ts-ignore
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: 5,
                message: postMessage,
                likesCount: 0,
                disLikesCount: 0,
                published: new Date().toLocaleString()
            }
            return state
        default:
            return state
    }
};

const addPostAC = () => ({type: ADD_POST})
