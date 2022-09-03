export const ADD_MESSAGE = "ADD-MESSAGE"

const initialState = {
    dialogs: [
        {id: 1, name: "Dimych B."},
        {id: 2, name: "Natasha"},
        {id: 3, name: "Gleb"},
        {id: 4, name: "Alisa"},
        {id: 5, name: "Vasyan"},
        {id: 6, name: "Rigik the cat"}
    ],
    messagesPage: [
        {id: 1, message: "Dude!"},
        {id: 2, message: "What\'s ap man?"},
        {id: 3, message: "Yo, bro!"},
        {id: 4, message: "Yo, yo bro!"}

    ]
}

//@ts-ignore
export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE :
            let newMessage = {

            }

            return state
        default:
            return state
    }
};