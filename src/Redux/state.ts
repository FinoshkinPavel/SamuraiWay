import {v1} from "uuid";
import {postType, rootStateType} from '../TypeItems/TypeItems'


let reRenderEntireTree = () => {
    console.log('hello')
}

export let state: rootStateType = {
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
}

export const addPost = (newPost: string) => {
  let post:postType = {
      id: v1(),
      post: newPost,
      avatar: 'https://img5.goodfon.com/original/1951x1359/3/91/ruzhe-oruzhie-devushka.jpg',
      likes: '0 likes'
  }

  state.profilePage.post.push(post)
    reRenderEntireTree()
    console.log(state)
}

export const subscriber = (observer: ()=>void) => {
  reRenderEntireTree = observer
}