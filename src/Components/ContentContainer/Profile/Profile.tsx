import style from "../ContentContainer.module.css";
import {Post} from "./Post/Post";
import {MyPost} from "./Post/MyPost/MyPost";

type PostPropsType={
    post: Array<postType>
}
type postType={
    id: string
    post: string
    avatar: string
    likes: string
}


export const Profile = (props: PostPropsType) => {



    return (
        <div>
            <div className={style.WallPaper}></div>
            <Post/>
            <MyPost post={props.post}/>
        </div>

    )
}