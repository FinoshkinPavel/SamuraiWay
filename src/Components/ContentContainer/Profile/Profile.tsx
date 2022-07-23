import style from "../ContentContainer.module.css";
import {PostType} from "../../../TypeItems/TypeItems";
import {PostContainer} from "./Post/PostContainer";
import {AppStoreType} from "../../../Redux/redux-store";

type StorePropsType = {
    store: AppStoreType
}

export const Profile = (props: StorePropsType) => {



    return (
        <div>
            <div className={style.WallPaper}></div>
            <PostContainer
                store={props.store}
            />
        </div>

    )
}