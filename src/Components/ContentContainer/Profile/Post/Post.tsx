import React, {ChangeEvent, MouseEventHandler, useState} from "react";
import style from './Post.module.css'
import {ActionType, AddPostActionType} from "../../../../TypeItems/TypeItems";
import {addNewPostAC} from "../../../../Redux/state";

type PostPropsType = {
    dispatch: (action: ActionType)=>void
}




export const Post = (props: PostPropsType) => {

    const [newPost, setNewPost] = useState<string>('')

    const changePostValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPost(e.currentTarget.value)
    }

    const onClickHandler = () => {

        let action = addNewPostAC(newPost)
        props.dispatch(action)
        setNewPost('')
    }



    return (
        <div>
            <div>
                <div className={style.PostCont}>
                    <div>My post</div>
                    <img src="https://img5.goodfon.com/original/1951x1359/3/91/ruzhe-oruzhie-devushka.jpg" alt=""/>
                    <input value={newPost} onChange={changePostValueHandler}/>
                    <button onClick={onClickHandler}>add</button>
                </div>
            </div>
        </div>
    )
}