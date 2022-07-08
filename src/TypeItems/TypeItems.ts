
//CONTENT-DATA-STATE
import {addMessageAC, addNewPostAC, ChangeMessageBodyAC} from "../Redux/state";

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
}
export type DialogsPageType = {
    user: Array<userType>
    messages: Array<messagesType>
    messagesBody: string
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
    _callSubscriber: ()=>void
    subscriber: (observer: ()=>void)=>void
    dispatch: (action:ActionType)=>void
    addPost: (newPost: string)=>void
}

//TYPE-ACTION-FORE-DISPATCH
export type ActionType = AddPostActionType | AddMessageActionType | ChangeMessageBodyActionType

export type AddPostActionType = ReturnType<typeof addNewPostAC>

export type ChangeMessageBodyActionType = ReturnType<typeof ChangeMessageBodyAC>

export type AddMessageActionType = ReturnType<typeof addMessageAC>


