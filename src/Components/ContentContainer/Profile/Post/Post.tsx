import React from "react";
import style from './Post.module.css'


export const Post = () => {
    return (
        <div>
            <div>
                <div className={style.PostCont}>
                    <div>My post</div>
                    <img src="https://img5.goodfon.com/original/1951x1359/3/91/ruzhe-oruzhie-devushka.jpg" alt=""/>
                    <input type="text"/>
                    <button>add</button>
                </div>
            </div>
        </div>
    )
}