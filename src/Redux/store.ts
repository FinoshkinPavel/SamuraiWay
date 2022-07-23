// import {v1} from "uuid";
// import { rootStateType, StoreType} from '../TypeItems/TypeItems'
// import {profileReducer} from "./ProfileReducer";
// import {dialogsReducer} from "./DialogsReducer";
//
//
//  let store = {
//     _state: {
//         profilePage: {
//             post: [
//                 {
//                     id: v1(),
//                     post: 'Hi it`s my first post!',
//                     avatar: 'https://img5.goodfon.com/original/1951x1359/3/91/ruzhe-oruzhie-devushka.jpg',
//                     likes: '5 likes'
//                 },
//                 {
//                     id: v1(),
//                     post: 'How are you?',
//                     avatar: 'https://img5.goodfon.com/original/1951x1359/3/91/ruzhe-oruzhie-devushka.jpg',
//                     likes: '12 likes'
//                 },
//             ],
//             textPostBody: '',
//         },
//         dialogsPage: {
//             user: [
//                 {id: v1(), name: 'user1'},
//                 {id: v1(), name: 'user2'},
//                 {id: v1(), name: 'user3'},
//                 {id: v1(), name: 'user4'},
//             ],
//             messages: [
//                 {id: v1(), messages: 'messages1'},
//                 {id: v1(), messages: 'messages2'},
//                 {id: v1(), messages: 'messages3'},
//             ],
//             messagesBodyText: '',
//         },
//     },
//
//     getState() {
//         return this._state
//     },
//     _callSubscriber(observer: any) {
//     },
//     subscriber(observer: (state: rootStateType) => void) {
//         this._callSubscriber = observer
//     },
//     // dispatch(action) {
//     //     this._state.profilePage = profileReducer(this._state.profilePage, action)
//     //     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//     //     this._callSubscriber(this._state)
//     // }
// }
//
//
//
//
//
//
// // if(action.type === 'CHANGE-POST-TEXT-BODY'){
// //     this._state.profilePage.textPostBody = action.newTextPostBody
// // }else
// // if (action.type === 'ADD-POST') {
// //     let post: postType = {
// //         id: v1(),
// //         post: this._state.profilePage.textPostBody,
// //         avatar: 'https://img5.goodfon.com/original/1951x1359/3/91/ruzhe-oruzhie-devushka.jpg',
// //         likes: '0 likes'
// //     }
// //
// //     this._state.profilePage.post.push(post)
// //     this._callSubscriber()
// //     console.log(this._state)
// // } else
// // if(action.type === 'CHANGE-MESSAGE-BODY'){
// //     this._state.dialogsPage.messagesBody = action.messageBody
// // }else
// // if (action.type === 'ADD-MESSAGE') {
// //
// //     let message: messagesType = {
// //         id: v1(),
// //         messages: this._state.dialogsPage.messagesBody
// //     }
// //     this._state.dialogsPage.messages.push(message)
// //
// //     this._callSubscriber()
// //     console.log(this._state)
// // }
//
//
//
//
