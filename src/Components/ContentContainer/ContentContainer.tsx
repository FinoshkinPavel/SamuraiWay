import React from 'react';
import style from './ContentContainer.module.css'
import {Route} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Messages/Dialogs";
import {Friends} from "./Friends/Friends";
import {Gallery} from "./Gallery/Gallery";
import {Music} from "./Music/Music";
import {messagesType, postType, userType} from "../../TypeItems/TypeItems";


type ContentPropsType={
    post: Array<postType>
    user: Array<userType>
    messages: Array<messagesType>
    addPost: (newPost: string)=>void
}


export const ContentContainer: React.FC<ContentPropsType> = ({
    post,user,messages,addPost, ...restProps
                                                             }) => {
    return (
        <div className={style.ContentContainer}>
            <Route exact path={'/Profile'} render={()=><Profile post={post} addPost={addPost}/>}/>
            <Route path={'/Messages'} render={()=><Dialogs user={user} messages={messages}/>}/>
            <Route path={'/Friends'} component={Friends}/>
            <Route path={'/Gallery'} component={Gallery}/>
            <Route path={'/Music'} component={Music}/>
        </div>
    );
};

