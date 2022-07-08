import React, {ChangeEvent, useState} from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {ActionType, messagesType, userType} from "../../../TypeItems/TypeItems";
import {addMessageAC, ChangeMessageBodyAC} from "../../../Redux/state";

type DialogsPropsType = {
    user: Array<userType>
    messages: Array<messagesType>
    dispatch: (action: ActionType) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {


    const changeMessageTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let action = ChangeMessageBodyAC(e.currentTarget.value)
        props.dispatch(action)
    }
    const clickAddMessageHandler = () => {
      let action = addMessageAC()
         props.dispatch(action)

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