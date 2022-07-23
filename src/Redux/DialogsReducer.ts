import {DialogsPageType, MessagesType} from "../TypeItems/TypeItems";
import {ActionType} from "../TypeItems/ReducerType";
import {v1} from "uuid";

let initialState = {
    user: [
        {id: v1(), name: 'user1'},
        {id: v1(), name: 'user2'},
        {id: v1(), name: 'user3'},
        {id: v1(), name: 'user4'},
    ],
    messages: [
        {id: v1(), messages: 'messages1'},
        {id: v1(), messages: 'messages2'},
        {id: v1(), messages: 'messages3'},
    ],
    messagesBodyText: '',
}

export const dialogsReducer = (state: DialogsPageType = initialState , action: ActionType): DialogsPageType => {
    switch (action.type){
        case "CHANGE-MESSAGE-BODY":{
            return {...state, messagesBodyText: action.payload.messageBody}
        }
        case "ADD-MESSAGE":{
            const newMessage: MessagesType = {
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