import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {v1} from "uuid";




const post = [
    {
        id: v1(),
        post: 'Hi it`s my first post!',
        avatar:'https://img5.goodfon.com/original/1951x1359/3/91/ruzhe-oruzhie-devushka.jpg',
        likes: '5 likes'
    },
    {
        id: v1(),
        post: 'How are you?',
        avatar:'https://img5.goodfon.com/original/1951x1359/3/91/ruzhe-oruzhie-devushka.jpg',
        likes: '12 likes'
    },
]
const  user = [
    {id:v1(), name: 'user1'},
    {id:v1(), name: 'user2'},
    {id:v1(), name: 'user3'},
    {id:v1(), name: 'user4'},
]
const messages = [
    {id: v1(), messages: 'messages1'},
    {id: v1(), messages: 'messages2'},
    {id: v1(), messages: 'messages3'},
]




ReactDOM.render(
    <App post={post}
         messages={messages}
         user={user} />,
  document.getElementById('root')
);