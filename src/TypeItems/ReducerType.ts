import {addNewPostAC, changePostTextBodyAC} from "../Redux/ProfileReducer";
import {addMessageAC, ChangeMessageBodyAC} from "../Redux/DialogsReducer";
import {changeFollowUnfollowAC} from "../Redux/FindUsersReducer";

export type ActionType =
    AddPostActionType |
    AddMessageActionType |
    ChangeMessageBodyActionType |
    ChangePostTextBodyType |
    ChangeFollowUnfollowType

export type ChangePostTextBodyType = ReturnType<typeof changePostTextBodyAC>

export type AddPostActionType = ReturnType<typeof addNewPostAC>

export type ChangeMessageBodyActionType = ReturnType<typeof ChangeMessageBodyAC>

export type AddMessageActionType = ReturnType<typeof addMessageAC>

export type ChangeFollowUnfollowType = ReturnType<typeof changeFollowUnfollowAC>