import React from 'react';
import './App.css';
import {NavBar} from "./Components/NavBar/NavBar";
import {ContentContainer} from "./Components/ContentContainer/ContentContainer";
import {Header} from "./Components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import {rootStateType} from "./TypeItems/TypeItems";


type statePropsType = {
    state: rootStateType
    addPost: (newPost: string)=>void
}


const App: React.FC<statePropsType> = ({
     state,addPost, ...restProps}) =>{
    return (
            <div className="App">
                <Header/>
                <NavBar/>
                <ContentContainer post={state.profilePage.post}
                                  addPost={addPost}
                                  user={state.dialogsPage.user}
                                  messages={state.dialogsPage.messages}/>
            </div>
    );
}

export default App;
