import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, state, subscriber} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";



export const reRenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
            />
        </BrowserRouter>
        , document.getElementById('root')
    );

}

reRenderEntireTree()

subscriber(reRenderEntireTree)