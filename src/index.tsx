import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";



export const reRenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                store={store}
            />
        </BrowserRouter>
        , document.getElementById('root')
    );

}

reRenderEntireTree()

store.subscribe(()=>{

    reRenderEntireTree()
})
