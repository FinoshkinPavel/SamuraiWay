import React from "react";
import {Dialogs} from "./Dialogs";
import {AppStoreType} from "../../../Redux/redux-store";
import {addMessageAC, ChangeMessageBodyAC} from "../../../Redux/DialogsReducer";

type StorePropsType = {
    store: AppStoreType
}

export const DialogsContainer= (props: StorePropsType) => {

    const state = props.store.getState()

    const changeMessageTextBody = (newTextMessageBody: string) => {
         let action = ChangeMessageBodyAC(newTextMessageBody)
         props.store.dispatch(action)
    }
    const addMessage = () => {
      let action = addMessageAC()
          props.store.dispatch(action)

    }


    return (
        <div>
            <Dialogs
                user={state.dialogsPage.user}
                messages={state.dialogsPage.messages}
                changeMessageTextBody={changeMessageTextBody}
                addMessage={addMessage}
            />
        </div>
    )
}