import {postType, ProfilePageType} from "../TypeItems/TypeItems";
import {v1} from "uuid";
import {ActionType} from "../TypeItems/ReducerType";

export  const profileReducer = (state: ProfilePageType , action: ActionType): ProfilePageType => {
    switch (action.type) {
        case "CHANGE-POST-TEXT-BODY":{
            state.textPostBody = action.payload.newTextPostBody
            return state
        }
        case "ADD-POST":{
            const newPost =
                {
                    id: v1(),
                    post: state.textPostBody,
                    avatar: 'https://img5.goodfon.com/original/1951x1359/3/91/ruzhe-oruzhie-devushka.jpg',
                    likes: '0 likes'
                }
            return {...state, post: [...state.post, newPost]}
        }
        default: return state
    }
}

export const changePostTextBodyAC = (newText: string) => {
    return {type: 'CHANGE-POST-TEXT-BODY', payload: {newTextPostBody: newText}}as const
}

export const addNewPostAC = () => {
    return {type: 'ADD-POST'}as const
}