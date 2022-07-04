import style from "../ContentContainer.module.css";
import {Post} from "./Post/Post";
import {MyPost} from "./Post/MyPost/MyPost";
import {postType} from "../../../TypeItems/TypeItems";

type PostPropsType={
    post: Array<postType>
    addPost: (newPost: string)=>void
}


export const Profile = (props: PostPropsType) => {



    return (
        <div>
            <div className={style.WallPaper}></div>
            <Post
                addPost={props.addPost}
            />
            <MyPost
                post={props.post}
            />
        </div>

    )
}