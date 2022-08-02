import {ActionType} from "../TypeItems/ReducerType";
import {v1} from "uuid";
import {FindUsersPageType} from "../TypeItems/TypeItems";


const initialState: FindUsersPageType = {
    users: [
        {
            id: v1(),
            followed: true,
            name: 'Taiwan',
            avatar: '',
            status: 'Hi i`m using this app',
            location: {city: 'Stepnogorsk', country: 'KZ'}
        },
        {
            id: v1(),
            followed: false,
            name: 'Sasha',
            avatar: '',
            status: 'Hi i`m using this app',
            location: {city: 'Moscow', country: 'RU'}
        },
        {
            id: v1(),
            followed: false,
            name: 'Bob',
            avatar: '',
            status: 'Hi i`m using this app',
            location: {city: 'New-York', country: 'USA'}
        },
        {
            id: v1(),
            followed: true,
            name: 'Berik',
            avatar: '',
            status: 'Hi i`m using this app',
            location: {city: 'Nur-Sultan', country: 'KZ'}
        },
    ]
}

export const findUsersReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "CHANGE-STATUS-FOLLOW-UNFOLLOW":{
            return {...state, users: state.users.map(el=> el.id === action.payload.idUser ? {...el, followed: !action.payload.newStatus} : el)}
        }
        default :
            return state
    }
}

export const changeFollowUnfollowAC = (idUser:string, statusFollowUnfollow: boolean) => {
    return {
        type: 'CHANGE-STATUS-FOLLOW-UNFOLLOW', payload: {idUser: idUser, newStatus: statusFollowUnfollow}
    } as const
}