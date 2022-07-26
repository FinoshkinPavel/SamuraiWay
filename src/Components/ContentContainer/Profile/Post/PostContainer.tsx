import React from "react";
import {addNewPostAC, changePostTextBodyAC} from "../../../../Redux/ProfileReducer";
import {Post} from "./Post";
import {AppStoreType} from "../../../../Redux/redux-store";
import {connect} from "react-redux";
import {PostType, ProfilePageType} from "../../../../TypeItems/TypeItems";
import {Dispatch} from "redux";

type StorePropsType = {
    store: AppStoreType
}



type MapStateToPropsType = {
    post: Array<PostType>
}

type MapDispatchToPropsType = {
    changePostTextBody: (newPostText: string)=>void
    addNewPost: ()=>void
}

const mapStateToProps = (state: AppStoreType):MapStateToPropsType  => {
    return {
       post: state.profilePage.post
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        changePostTextBody: (newPostText: string) => {
            const action = changePostTextBodyAC(newPostText)
            dispatch(action)
        },
        addNewPost:() => {
            let action = addNewPostAC()
            dispatch(action)
        },
    }
}

export const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post)