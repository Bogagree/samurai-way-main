import {addPost, profileReducer, ProfileStateType} from "./profile-reducer";


let initialState: ProfileStateType

beforeEach(() => {
    initialState = {
        posts: [
            {id: 1, message: "Dude!", likesCount: 1, disLikesCount: 2, published: "7/13/2022, 11:46:03 AM"},
            {id: 2, message: "What\'s ap man?", likesCount: 3, disLikesCount: 4, published: "7/13/2022, 11:47:03 AM"},
        ],
        userProfile: null,
        isFetching: false,
        status: ''
    }
}, 0)

test('posts length should be incremented', () => {

    let newState = profileReducer(initialState, addPost('hi man'))

    expect(newState.posts.length).toBe(3)
})

test('added message should matched', () => {

    let newState = profileReducer(initialState, addPost('hi man'))

    expect(newState.posts[2].message).toBe('hi man')
})

