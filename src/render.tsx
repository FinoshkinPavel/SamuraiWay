import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";
import {rootStateType} from "./TypeItems/TypeItems";



export const reRenderEntireTree = (state: rootStateType) => {
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
