import style from "../ContentContainer.module.css";
import {Post} from "./Post/Post";
import {MyPost} from "./Post/MyPost/MyPost";
import {postType} from "../../../TypeItems/TypeItems";
import {ActionType} from "../../../TypeItems/TypeItems";

type PostPropsType={
    post: Array<postType>
    dispatch: (action: ActionType)=>void
}


export const Profile = (props: PostPropsType) => {



    return (
        <div>
            <div className={style.WallPaper}></div>
            <Post
                dispatch={props.dispatch}
            />
            <MyPost
                post={props.post}
            />
        </div>

    )
}