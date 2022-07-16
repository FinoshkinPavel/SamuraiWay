import {addNewPostAC, changePostTextBodyAC} from "../Redux/ProfileReducer";
import {addMessageAC, ChangeMessageBodyAC} from "../Redux/DialogsReducer";

export type ActionType = AddPostActionType | AddMessageActionType | ChangeMessageBodyActionType | ChangePostTextBodyType

export type ChangePostTextBodyType = ReturnType<typeof changePostTextBodyAC>

export type AddPostActionType = ReturnType<typeof addNewPostAC>

export type ChangeMessageBodyActionType = ReturnType<typeof ChangeMessageBodyAC>

export type AddMessageActionType = ReturnType<typeof addMessageAC>