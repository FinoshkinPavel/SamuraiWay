import {combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
})


export let store = createStore(reducers)

export type AppStoreType = typeof store