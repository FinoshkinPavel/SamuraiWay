import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./Redux/store";
import {BrowserRouter} from "react-router-dom";
import {rootStateType} from "./TypeItems/TypeItems";



export const reRenderEntireTree = (state: rootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state} dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>
        , document.getElementById('root')
    );

}

reRenderEntireTree(store.getState())

store.subscriber(reRenderEntireTree)