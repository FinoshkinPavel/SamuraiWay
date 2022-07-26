import React from 'react';
import style from './ContentContainer.module.css'
import {Route} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Messages/Dialogs";
import {Friends} from "./Friends/Friends";
import {Gallery} from "./Gallery/Gallery";
import {Music} from "./Music/Music";
import {AppStoreType} from "../../Redux/redux-store";
import {DialogsContainer} from "./Messages/DialogsContainer";



type StorePropsType = {
    store: AppStoreType
}


export const ContentContainer: React.FC = () => {
    return (
        <div className={style.ContentContainer}>
            <Route exact path={'/Profile'} render={()=><Profile/>}/>
            <Route path={'/Messages'} render={()=><DialogsContainer/>}/>
            <Route path={'/Friends'} component={Friends}/>
            <Route path={'/Gallery'} component={Gallery}/>
            <Route path={'/Music'} component={Music}/>
        </div>
    );
};

