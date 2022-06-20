import React from "react";
import style from './MyPost.module.css'
import {v1} from "uuid";

type ContentPropsType={
    post: Array<postType>
}
type postType={
    id: string
    post: string
    avatar: string
    likes: string
}

// const [post, setPost]=useState([
//     {
//         id: v1(),
//         post: 'Hi it`s my first post!',
//         avatar:'https://img5.goodfon.com/original/1951x1359/3/91/ruzhe-oruzhie-devushka.jpg',
//         likes: '5 likes'
//     },
//     {
//         id: v1(),
//         post: 'How are you?',
//         avatar:'https://img5.goodfon.com/original/1951x1359/3/91/ruzhe-oruzhie-devushka.jpg',
//         likes: '12 likes'
//     },
// ])

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