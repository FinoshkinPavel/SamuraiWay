import React, {useState} from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {messagesType, userType} from "../../../TypeItems/TypeItems";

type DialogsPropsType = {
    user: Array<userType>
    messages: Array<messagesType>
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    // const [user, setUser]=useState([
    //     {id:v1(), name: 'user1'},
    //     {id:v1(), name: 'user2'},
    //     {id:v1(), name: 'user3'},
    //     {id:v1(), name: 'user4'},
    // ])

    // const [messages, setMessages]=useState([
    //     {id: v1(), messages: 'messages1'},
    //     {id: v1(), messages: 'messages2'},
    //     {id: v1(), messages: 'messages3'},
    // ])

    const mappedUser = props.user.map(el=>{
        return (
            <div key={el.id} className={style.userWrap}>
                <NavLink to={`/${el.name}`} activeClassName={style.userActiveLink}>{el.name}</NavLink>
            </div>
        )
    })
    const mappedMessages = props.messages.map(el=>{
        return(
            <div key={el.id}>
                {el.messages}
            </div>
        )
    })

    return (
        <div className={style.DialogsCont}>
            <div className={style.DialogsUserCont}>{mappedUser}</div>
            <div className={style.DialogsMessagesCont}>{mappedMessages}</div>
        </div>
    )
}