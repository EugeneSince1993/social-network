let store = {
  _rerenderEntireTree () {
    console.log('State changed');
  },
  _state: {
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
  },
  getState () {
    return this._state;
  },
  subscribe (observer) {
    this._rerenderEntireTree = observer;
  },
  /* Add posts in MyPosts - Start */
  addPost () {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._rerenderEntireTree(this._state);
  },
  updateNewPostText (newText) {
    this._state.profilePage.newPostText = newText;
    this._rerenderEntireTree(this._state);
  },
  /* Add posts in MyPosts - End */
  /* Add messages in Messages - Start */
  addMessage () {
    let newMessage = {
      id: 10,
      message: this._state.dialogsPage.newMessageText,
      likesCount: 0
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._rerenderEntireTree(this._state);
  },
  updateNewMessageText (newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._rerenderEntireTree(this._state);
  }
  /* Add messages in Messages - End */
};

window.state = store.getState();

export default store;
