import React from 'react';
import './App.css';
import {NavBar} from "./Components/NavBar/NavBar";
import {ContentContainer} from "./Components/ContentContainer/ContentContainer";
import {Header} from "./Components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import {messagesType, postType, userType} from "./TypeItems/TypeItems";

type ContentPropsType={
    post: Array<postType>
    user: Array<userType>
    messages: Array<messagesType>

}


const App: React.FC<ContentPropsType> = ({
    post, user, messages, ...restProps
                                         }) =>{
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <ContentContainer post={post}
                                  user={user}
                                  messages={messages}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
