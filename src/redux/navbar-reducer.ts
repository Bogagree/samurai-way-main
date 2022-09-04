let initialState: NavbarStateType = {
    friends: [
        {id: 1, name: "Dimych_B", fotoSrc: "../../../../assets/images/avatars/friends/Dimych_B.jpg"},
        {id: 2, name: "Natasha", fotoSrc: "../../../../assets/images/avatars/friends/Natasha.jpg"},
        {id: 3, name: "Gleb", fotoSrc: "../../../../assets/images/avatars/friends/Gleb.jpg"},
        {id: 4, name: "Alisa", fotoSrc: "../../../../assets/images/avatars/friends/Alisa.jpg"},
        {id: 5, name: "Tosik", fotoSrc: "../../../../assets/images/avatars/friends/Tosik.jpg"},
        {id: 6, name: "Rigik_the_cat", fotoSrc: "../../../../assets/images/avatars/friends/Rigik_the_cat.jpg"},
        {id: 7, name: "Vova_P", fotoSrc: "../../../../assets/images/avatars/friends/Vova_P.jpg"},
        {id: 8, name: "Dima_M", fotoSrc: "../../../../assets/images/avatars/friends/Dima_M.jpg"},
        {id: 9, name: "Joseph_B", fotoSrc: "../../../../assets/images/avatars/friends/Joseph_B.jpg"}
    ]
}

export const navbarReducer = (state = initialState, action: NavbarActionType): NavbarStateType => {
    switch (action.type) {
        case 'ADD-FRIEND' :
            return state
        default:
            return state
    }
};

export const addFriendAC = () => {
    return {type: 'ADD-FRIEND'} as const
}

type NavbarActionType = ReturnType<typeof addFriendAC>

type NavbarStateType = {
    friends: FriendType[]
}

export type FriendType = {
    id: number
    name: string
    fotoSrc: string
}