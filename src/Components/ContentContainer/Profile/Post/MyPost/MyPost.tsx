import React from "react";
import style from './MyPost.module.css'

type ContentPropsType={
    post: Array<postType>
}
type postType={
    id: string
    post: string
    avatar: string
    likes: string
}



export const MyPost = (props: ContentPropsType) => {

    const mappedPost = props.post.map(el=>{
        return(
            <div key={el.id} className={style.MyPostCont}>
                <img src={`${el.avatar}`} alt="ava"/>
                <span>{el.post}</span>
                <div>{el.likes}</div>
            </div>
        )
    })

    return (
        <div>
            {mappedPost}
        </div>
    )
}