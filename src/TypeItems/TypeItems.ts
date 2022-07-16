
//CONTENT-DATA-STATE

import {ActionType} from "./ReducerType";

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

//CONTENT-STATE
export type ProfilePageType = {
    post: Array<postType>
    textPostBody: string
}
export type DialogsPageType = {
    user: Array<userType>
    messages: Array<messagesType>
    messagesBodyText: string
}
export type NavBarType = {}

// ROOT-STATE
export type rootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    navBar: NavBarType
}

//STORE-TYPE
export type StoreType = {
    _state: rootStateType
    getState: ()=>rootStateType
    _callSubscriber: (observer: any)=>void
    subscriber: (observer: (state: rootStateType)=>void)=>void
    dispatch: (action:ActionType)=>void
}

//TYPE-ACTION-FORE-DISPATCH



