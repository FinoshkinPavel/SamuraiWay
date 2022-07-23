import {PostType, ProfilePageType} from "../TypeItems/TypeItems";
import {v1} from "uuid";
import {ActionType} from "../TypeItems/ReducerType";

let initialState = {
        post: [
            {
                id: v1(),
                post: 'Hi it`s my first post!',
                avatar: 'https://img5.goodfon.com/original/1951x1359/3/91/ruzhe-oruzhie-devushka.jpg',
                likes: '5 likes'
            },
            {
                id: v1(),
                post: 'How are you?',
                avatar: 'https://img5.goodfon.com/original/1951x1359/3/91/ruzhe-oruzhie-devushka.jpg',
                likes: '12 likes'
            },
        ],
        textPostBody: '',
    }


export  const profileReducer = (state:ProfilePageType = initialState , action: ActionType): ProfilePageType => {
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