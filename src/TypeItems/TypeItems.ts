export type postType = {
    id: string
    post: string
    avatar: string
    likes: string
}
export type userType = {
    id: string
    name: string
}
export type messagesType = {
    id: string
    messages: string
}

export type ProfilePageType = {
    post: Array<postType>
}
export type DialogsPageType = {
    user: Array<userType>
    messages: Array<messagesType>
}
export type NavBarType = {}


export type rootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    navBar: NavBarType
}
