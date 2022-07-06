import React from 'react';
import './App.css';
import {NavBar} from "./Components/NavBar/NavBar";
import {ContentContainer} from "./Components/ContentContainer/ContentContainer";
import {Header} from "./Components/Header/Header";
import {StoreType} from "./TypeItems/TypeItems";


type PropsType = {
    store: StoreType
}


const App: React.FC<PropsType> = (props) =>{

    let state = props.store.getState()

    return (
            <div className="App">
                <Header/>
                <NavBar/>
                <ContentContainer post={state.profilePage.post}
                                  dispatch={props.store.dispatch.bind(props.store)}
                                  user={state.dialogsPage.user}
                                  messages={state.dialogsPage.messages}/>
            </div>
    );
}

export default App;
