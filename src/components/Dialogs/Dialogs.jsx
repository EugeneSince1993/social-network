import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(
    d => <DialogItem name={d.name} id={d.id} avatarName={d.avatarName}/>
  );

  let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>);

  let newPostElement = React.createRef();

  let addMessage = () => {
    let action = addMessageActionCreator();
    props.dispatch(action);
  };

  let onMessageChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea onChange={onMessageChange} ref={newPostElement} value={props.state.newMessageText} />
        </div>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
