import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";



export const reRenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                addPost={store.addPost.bind(store)}
            />
        </BrowserRouter>
        , document.getElementById('root')
    );

}

reRenderEntireTree()

store.subscriber(reRenderEntireTree)