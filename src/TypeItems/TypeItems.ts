
//CONTENT-DATA-STATE

import {ActionType} from "./ReducerType";

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

// ROOT-STATE
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

//STORE-TYPE
export type StoreType = {
    state: RootStateType
    }





