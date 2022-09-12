export const ADD_MESSAGE = "ADD-MESSAGE"
// export const UPDATE_MESSAGE = "UPDATE-MESSAGE"

const initialState: DialogsStateType = {

    dialogs: [
        {id: 1, name: "Dimych B."},
        {id: 2, name: "Natasha"},
        {id: 3, name: "Gleb"},
        {id: 4, name: "Alisa"},
        {id: 5, name: "Vasyan"},
        {id: 6, name: "Rigik the cat"}
    ],
    messages: [
        {id: 1, message: "Dude!"},
        {id: 2, message: "What\'s ap man?"},
        {id: 3, message: "Yo, bro!"},
        {id: 4, message: "Yo, yo bro!"}
    ]
}

export const dialogsReducer = (state = initialState, action: DialogsActionsType): DialogsStateType => {
    switch (action.type) {
        case ADD_MESSAGE :
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: action.newMessage}]
            }

        default:
            return state
    }
};

export const addMessageAC = (newMessage: string) => {
    return {type: ADD_MESSAGE, newMessage} as const
}


export type DialogsStateType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}


type DialogsActionsType =
    ReturnType<typeof addMessageAC>