import {rerenderEntireTree} from "../render";

let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'It\'s my first post', likesCount: 11},
      {id: 3, message: 'Blabla', likesCount: 11},
      {id: 4, message: 'Dada', likesCount: 11}
    ]
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Dimych', avatarName: '2.jpg'},
      {id: 2, name: 'Andrey', avatarName: '4.jpg'},
      {id: 3, name: 'Sveta', avatarName: '1.jpg'},
      {id: 4, name: 'Sasha', avatarName: '6.jpg'},
      {id: 5, name: 'Viktor', avatarName: '9.jpg'},
      {id: 6, name: 'Valera', avatarName: '8.jpg'}
    ],
    messages: [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How is your it-kamasutra?'},
      {id: 3, message: 'Yo'},
      {id: 4, message: 'Yo'},
      {id: 5, message: 'Yo'}
    ]
  },
  sidebar: {

  }
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;
