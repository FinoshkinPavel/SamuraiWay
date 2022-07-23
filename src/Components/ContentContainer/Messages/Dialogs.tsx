import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {MessagesType, UserType} from "../../../TypeItems/TypeItems";

type DialogsPropsType = {
    user: Array<UserType>
    messages: Array<MessagesType>
    changeMessageTextBody: (newTextMessageBody:string)=>void
    addMessage:()=>void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {


    const changeMessageTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMessageTextBody(e.currentTarget.value)
    }
    const clickAddMessageHandler = () => {
      props.addMessage()
    }

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
            <input type="text"  onChange={changeMessageTextHandler}/><button onClick={clickAddMessageHandler}>add message</button>
        </div>
    )
}