import React from 'react';
import {FindUserType} from "../../../TypeItems/TypeItems";
import style from './FindUsers.module.css'

type FindUsersPropsType = {
    users: Array<FindUserType>
    changeFollowUnfollowHandler: (idUser: string, followed: boolean)=>void
}

export const FindUsers: React.FC<FindUsersPropsType> = (props) => {

    const changeFollowUnfollowHandler = (idUser: string, followed: boolean) => {
      props.changeFollowUnfollowHandler(idUser, followed)
    }
    
    let mappedUsers = props.users.map(el => {
        return (
            <div key={el.id}>
                <div className={style.cardUser}>
                    <div className={style.innerImgAndFollow}>
                        <div className={style.avatar}>img</div>
                        <button onClick={()=>{changeFollowUnfollowHandler(el.id, el.followed)}}>{el.followed? 'Unfollow' : 'Follow'}</button>
                    </div>
                    <div className={style.innerInfo}>
                        <div className={style.name}>{el.name}</div>
                        <div className={style.status}>{el.status}</div>
                        <div className={style.country}>{el.location.city}</div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className={style.header}><h2>Users</h2></div>
            <div className={style.wrapUser}>{mappedUsers}</div>
        </div>
    );
};

