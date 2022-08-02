import React from 'react';
import './App.css';
import {NavBar} from "./Components/NavBar/NavBar";
import {ContentContainer} from "./Components/ContentContainer/ContentContainer";
import {Header} from "./Components/Header/Header";





const App: React.FC = () =>{
    return (
            <div className="App">
                <Header/>
                <NavBar/>
                <ContentContainer/>
            </div>
    );
}

export default App;
