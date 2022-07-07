import {v1} from "uuid";
import {AddPostActionType, postType, StoreType} from '../TypeItems/TypeItems'



export let store: StoreType = {
    _state: {
        profilePage: {
            post: [
                {
                    id: v1(),
                    post: 'Hi it`s my first post!',
                    avatar: 'https://img5.goodfon.com/original/1951x1359/3/91/ruzhe-oruzhie-devushka.jpg',
                    likes: '5 likes'
                },
                {
                    id: v1(),
                    post: 'How are you?',
                    avatar: 'https://img5.goodfon.com/original/1951x1359/3/91/ruzhe-oruzhie-devushka.jpg',
                    likes: '12 likes'
                },
            ],
        },
        dialogsPage: {
            user: [
                {id: v1(), name: 'user1'},
                {id: v1(), name: 'user2'},
                {id: v1(), name: 'user3'},
                {id: v1(), name: 'user4'},
            ],
            messages: [
                {id: v1(), messages: 'messages1'},
                {id: v1(), messages: 'messages2'},
                {id: v1(), messages: 'messages3'},
            ],
        },
        navBar: {},
    },

    getState(){ return this._state },
    _callSubscriber(){},
    subscriber(observer){ this._callSubscriber = observer },

    dispatch(action){
        if(action.type === 'ADD-POST'){
            let post:postType = {
                id: v1(),
                post: action.newPost,
                avatar: 'https://img5.goodfon.com/original/1951x1359/3/91/ruzhe-oruzhie-devushka.jpg',
                likes: '0 likes'
            }

            this._state.profilePage.post.push(post)
            this._callSubscriber()
            console.log(this._state)
        }
    },
    addPost(newPost) {
        let post:postType = {
            id: v1(),
            post: newPost,
            avatar: 'https://img5.goodfon.com/original/1951x1359/3/91/ruzhe-oruzhie-devushka.jpg',
            likes: '0 likes'
        }

        this._state.profilePage.post.push(post)
        this._callSubscriber()
        console.log(this._state)
    },
}

export const addNewPostAC  = (newPost: string): AddPostActionType => {
    return {type:'ADD-POST', newPost: newPost}
}







