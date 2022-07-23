import React from 'react';
import './App.css';
import {NavBar} from "./Components/NavBar/NavBar";
import {ContentContainer} from "./Components/ContentContainer/ContentContainer";
import {Header} from "./Components/Header/Header";
import {AppStoreType} from "./Redux/redux-store";


type StorePropsType = {
    store: AppStoreType
}


const App: React.FC<StorePropsType> = (props) =>{
    return (
            <div className="App">
                <Header/>
                <NavBar/>
                <ContentContainer store={props.store}/>
            </div>
    );
}

export default App;
