import React from 'react';
import './App.css';
import {NavBar} from "./Components/NavBar/NavBar";
import {ContentContainer} from "./Components/ContentContainer/ContentContainer";
import {Header} from "./Components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import {rootStateType} from "./TypeItems/TypeItems";


type statePropsType = {
    state: rootStateType
}


const App: React.FC<statePropsType> = ({
     state, ...restProps}) =>{
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <ContentContainer post={state.profilePage.post}
                                  user={state.dialogsPage.user}
                                  messages={state.dialogsPage.messages}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
