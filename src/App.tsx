import React from 'react';
import './App.css';
import {NavBar} from "./Components/NavBar/NavBar";
import {ContentContainer} from "./Components/ContentContainer/ContentContainer";
import {Header} from "./Components/Header/Header";
import {rootStateType, StoreType} from "./TypeItems/TypeItems";
import {ActionType} from "./TypeItems/ReducerType";


type PropsType = {
    state: rootStateType
    dispatch: (action: ActionType)=>void
}


const App: React.FC<PropsType> = (props) =>{

    return (
            <div className="App">
                <Header/>
                <NavBar/>
                <ContentContainer post={props.state.profilePage.post}
                                  dispatch={props.dispatch}
                                  user={props.state.dialogsPage.user}
                                  messages={props.state.dialogsPage.messages}/>
            </div>
    );
}

export default App;
