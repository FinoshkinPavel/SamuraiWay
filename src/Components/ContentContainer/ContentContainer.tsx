import React from 'react';
import style from './ContentContainer.module.css'
import {Route} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import {Friends} from "./Friends/Friends";
import {Gallery} from "./Gallery/Gallery";
import {Music} from "./Music/Music";
import {DialogsContainer} from "./Messages/DialogsContainer";
import {FindUsersContainer} from "./Users/FindUsersContainer";






export const ContentContainer: React.FC = () => {
    return (
        <div className={style.ContentContainer}>
            <Route exact path={'/Profile'} render={()=><Profile/>}/>
            <Route path={'/Messages'} render={()=><DialogsContainer/>}/>
            <Route path={'/Friends'} component={Friends}/>
            <Route path={'/Gallery'} component={Gallery}/>
            <Route path={'/Music'} component={Music}/>
            <Route path={'/FindUsers'} component={FindUsersContainer}/>
        </div>
    );
};

