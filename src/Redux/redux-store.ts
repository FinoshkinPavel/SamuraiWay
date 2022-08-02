import {combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import {findUsersReducer} from "./FindUsersReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    findUsersPage: findUsersReducer,
})


export let store = createStore(rootReducer)

export type AppStoreType = ReturnType<typeof rootReducer>