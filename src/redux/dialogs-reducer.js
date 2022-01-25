const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
  newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 6, message: body}]
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
});

export default dialogsReducer;
