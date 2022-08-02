import React from 'react';
import {FindUsers} from "./FindUsers";
import {connect} from "react-redux";
import {AppStoreType} from "../../../Redux/redux-store";
import {FindUserType} from "../../../TypeItems/TypeItems";
import {changeFollowUnfollowAC} from "../../../Redux/FindUsersReducer";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    users: Array<FindUserType>
}

type MapDispatchToProps = {
    changeFollowUnfollowHandler: (idUser: string, followed: boolean)=>void
}

const mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        users: state.findUsersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        changeFollowUnfollowHandler: (idUser: string, followed: boolean)=>{
            let action = changeFollowUnfollowAC(idUser, followed)
            dispatch(action)
        }
    }
}

export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)

