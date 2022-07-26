import React from "react";
import {Dialogs} from "./Dialogs";
import {AppStoreType} from "../../../Redux/redux-store";
import {addMessageAC, ChangeMessageBodyAC} from "../../../Redux/DialogsReducer";
import {connect} from "react-redux";
import {MessagesType, UserType} from "../../../TypeItems/TypeItems";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    user: Array<UserType>
    messages: Array<MessagesType>
}

type MapDispatchToPropsType = {
    changeMessageTextBody: (newTextMessageBody: string) => void
    addMessage: () => void

}

const mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        user: state.dialogsPage.user,
        messages: state.dialogsPage.messages
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        changeMessageTextBody: (newTextMessageBody: string) => {
            let action = ChangeMessageBodyAC(newTextMessageBody)
            dispatch(action)
        },
        addMessage: () => {
            let action = addMessageAC()
            dispatch(action)

        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);