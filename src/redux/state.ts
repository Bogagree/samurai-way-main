export type StoreType = {
    _state: RootStatetype
    getState: () => RootStatetype
    callSubscribe: () => void
    subscribe: ( callback: ()=>void ) => void
    addPost: (postMessage:string) => void
    updateNewPostText: (newText: string) => void
    addMessage: (newMessage:string) => void
}

export let store: StoreType = {
    _state: {
        profilePage: {
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
            newPost: 'IT-kamasutra.com'
        },
        dialogPage: {
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
        },
        header: {},
        navbar: {
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
        },
        musicPage: {},
        settingsPage: {},
        newsPage: {}
    },
    getState() {
        return this._state
    },
    callSubscribe() {
        console.log('state changed')
    },
    subscribe(observer: () => void) {
        renderEntireTree = observer
    },
    addPost(postMessage: string) {
        let newPost = {
            id: 5,
            message: postMessage,
            likesCount: 0,
            disLikesCount: 0,
            published: new Date().toLocaleString()
        };
        state.profilePage.posts.push(newPost)
        renderEntireTree()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPost = newText
        renderEntireTree()
    },
    addMessage(newMessage: string) {
        let newObjectMessage = {
            id: 6,
            message: newMessage
        }
        this._state.dialogPage.messagesPage.push(newObjectMessage)
        renderEntireTree()
    },

}

let renderEntireTree = () => {
    console.log('state changed')
}

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
type PostType = {
    id: number
    message: string
    likesCount: number
    disLikesCount: number
    published: string
}
type ProfilePageType = {
    posts: Array<PostType>
    newPost: string
}
type DialogsPageType = {
    dialogs: Array<DialogType>
    messagesPage: Array<MessageType>
}
type HeaderType = {}
type FriendType = {
    id: number
    name: string
    fotoSrc: string
}
type NavbarType = {
    friends: Array<FriendType>
}
type MusicPageType = {}
type SettingsPageType = {}
type NewsPageType = {}
type RootStatetype = {
    profilePage: ProfilePageType
    dialogPage: DialogsPageType
    header: HeaderType
    navbar: NavbarType
    musicPage: MusicPageType
    settingsPage: SettingsPageType
    newsPage: NewsPageType
}

let state: RootStatetype = {
    profilePage: {
        posts: [
            {id: 1, message: "Dude!", likesCount: 1, disLikesCount: 2, published: "7/13/2022, 11:46:03 AM"},
            {id: 2, message: "What\'s ap man?", likesCount: 3, disLikesCount: 4, published: "7/13/2022, 11:47:03 AM"},
            // {id: 3, message: "Yo, bro!", likesCount: 5, disLikesCount: 6, published: "7/13/2022, 11:48:03 AM"},
            // {id: 4, message: "Yo, yo bro!", likesCount: 7, disLikesCount: 8, published: "7/13/2022, 11:49:03 AM"},
        ],
        newPost: 'IT-kamasutra.com'
    },
    dialogPage: {
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
    },
    header: {},
    navbar: {
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
    },
    musicPage: {},
    settingsPage: {},
    newsPage: {}
};

// @ts-ignore
window.state = state

export let addPost = (postMessage: string) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
        disLikesCount: 0,
        published: new Date().toLocaleString()
    };
    state.profilePage.posts.push(newPost)
    renderEntireTree()
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPost = newText
    renderEntireTree()
}

export let addMessage = (newComment: string) => {
    let newMessage = {
        id: 6,
        message: newComment
    }
    state.dialogPage.messagesPage.push(newMessage)
    renderEntireTree()
}

export const subscribe = (observer: () => void) => {
    renderEntireTree = observer
}

export default state


