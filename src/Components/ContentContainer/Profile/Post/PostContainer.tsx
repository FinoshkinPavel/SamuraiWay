import React from "react";
import {addNewPostAC, changePostTextBodyAC} from "../../../../Redux/ProfileReducer";
import {Post} from "./Post";
import {AppStoreType} from "../../../../Redux/redux-store";

type StorePropsType = {
    store: AppStoreType
}


export const PostContainer = (props: StorePropsType) => {
    const state = props.store.getState()
    const changePostTextBody = (newPostText: string) => {
        const action = changePostTextBodyAC(newPostText)
        props.store.dispatch(action)
    }

    const addNewPost = () => {
        let action = addNewPostAC()
        props.store.dispatch(action)
    }


    return (
        <div>
            <Post
                changePostTextBody={changePostTextBody}
                addNewPost={addNewPost}
                post={state.profilePage.post}
            />
        </div>
    )
}