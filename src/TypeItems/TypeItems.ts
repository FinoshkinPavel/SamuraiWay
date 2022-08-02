
//CONTENT-DATA-STATE

export type PostType = {
    id: string
    post: string
    avatar: string
    likes: string
}
export type UserType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    messages: string
}
export type FindUserType = {
    id: string
    followed: boolean
    name: string
    avatar: string
    status: string
    location: {city: string, country: string}
}

//CONTENT-STATE
export type ProfilePageType = {
    post: Array<PostType>
    textPostBody: string
}
export type DialogsPageType = {
    user: Array<UserType>
    messages: Array<MessagesType>
    messagesBodyText: string
}
export type FindUsersPageType = {
    users : Array<FindUserType>
}







