import React, {ChangeEvent} from "react";
import style from './Post.module.css'
import {MyPost} from "./MyPost/MyPost";
import {PostType} from "../../../../TypeItems/TypeItems";


type PostPropsType = {
    post: Array<PostType>
    changePostTextBody: (newPostText: string)=>void
    addNewPost: ()=>void
}


export const Post = (props: PostPropsType) => {
    const changePostValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changePostTextBody(e.currentTarget.value)
    }

    const onClickHandler = () => {
        props.addNewPost()
    }


    return (
        <div>
            <div>
                <div className={style.PostCont}>
                    <div>My post</div>
                    <img src="https://img5.goodfon.com/original/1951x1359/3/91/ruzhe-oruzhie-devushka.jpg" alt=""/>
                    <input  onChange={changePostValueHandler}/>
                    <button onClick={onClickHandler}>add</button>
                    <MyPost post={props.post}/>
                </div>
            </div>
        </div>
    )
}