import React, {ChangeEvent} from "react";
import style from './Post.module.css'
import {ActionType} from "../../../../TypeItems/ReducerType";
import {addNewPostAC, changePostTextBodyAC} from "../../../../Redux/ProfileReducer";

type PostPropsType = {
    dispatch: (action: ActionType) => void
}


export const Post = (props: PostPropsType) => {
    const changePostValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const action = changePostTextBodyAC(e.currentTarget.value)
        props.dispatch(action)
    }

    const onClickHandler = () => {
        let action = addNewPostAC()
        props.dispatch(action)
    }


    return (
        <div>
            <div>
                <div className={style.PostCont}>
                    <div>My post</div>
                    <img src="https://img5.goodfon.com/original/1951x1359/3/91/ruzhe-oruzhie-devushka.jpg" alt=""/>
                    <input  onChange={changePostValueHandler}/>
                    <button onClick={onClickHandler}>add</button>
                </div>
            </div>
        </div>
    )
}