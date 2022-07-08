import React from 'react';
import style from './ContentContainer.module.css'
import {Route} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Messages/Dialogs";
import {Friends} from "./Friends/Friends";
import {Gallery} from "./Gallery/Gallery";
import {Music} from "./Music/Music";
import {messagesType, postType, userType} from "../../TypeItems/TypeItems";
import {ActionType} from "../../TypeItems/TypeItems";


type ContentPropsType={
    post: Array<postType>
    user: Array<userType>
    messages: Array<messagesType>
    dispatch: (action: ActionType)=>void
}


export const ContentContainer: React.FC<ContentPropsType> = ({
    post,user,messages,dispatch, ...restProps
                                                             }) => {
    return (
        <div className={style.ContentContainer}>
            <Route exact path={'/Profile'} render={()=><Profile post={post} dispatch={dispatch}/>}/>
            <Route path={'/Messages'} render={()=><Dialogs user={user} messages={messages} dispatch={dispatch}/>}/>
            <Route path={'/Friends'} component={Friends}/>
            <Route path={'/Gallery'} component={Gallery}/>
            <Route path={'/Music'} component={Music}/>
        </div>
    );
};

