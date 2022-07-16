import {DialogsPageType, messagesType} from "../TypeItems/TypeItems";
import {ActionType} from "../TypeItems/ReducerType";
import {v1} from "uuid";

export const dialogsReducer = (state: DialogsPageType , action: ActionType): DialogsPageType => {
    switch (action.type){
        case "CHANGE-MESSAGE-BODY":{
            return {...state, messagesBodyText: action.payload.messageBody}
        }
        case "ADD-MESSAGE":{
            const newMessage: messagesType = {
                id: v1(),
                messages: state.messagesBodyText,
            }
            return {...state, messages: [...state.messages, newMessage]}
        }
        default: return state
    }
}

export const ChangeMessageBodyAC = (newMessageBody: string) => {
    return {type: 'CHANGE-MESSAGE-BODY', payload:{ messageBody: newMessageBody}}as const
}

export const addMessageAC = () => {
    return { type: 'ADD-MESSAGE', }as const
}