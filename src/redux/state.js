let rerenderEntireTree = () => {
  console.log('State changed');
};

let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'It\'s my first post', likesCount: 11},
      {id: 3, message: 'Blabla', likesCount: 11},
      {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com'
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
    ],
    newMessageText: 'Howdy partner!'
  },
  sidebar: {

  }
};

window.state = state;

/* Add posts in MyPosts - Start */

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

/* Add posts in MyPosts - End */

/* Add messages in Messages - Start */

export const addMessage = () => {
  let newMessage = {
    id: 10,
    message: state.dialogsPage.newMessageText,
    likesCount: 0
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
};

export const updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
};

/* Add messages in Messages - End */

export const subscribe = (observer) => {

};

export default state;
