import React from 'react';
import s from './Dialogs.module.css';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../old-files/StoreContext-44-lesson-only";
import {connect} from "react-redux";

const DialogsContainer = () => {

  return (
    <StoreContext.Consumer>
      {
        store => {
          let state = store.getState().dialogsPage;

          let onSendMessageClick = () => {
            store.dispatch(sendMessageCreator());
          };

          let onNewMessageChange = (body) => {
            store.dispatch(updateNewMessageBodyCreator(body));
          };

          return (
            <Dialogs
              updateNewMessageBody={onNewMessageChange}
              sendMessage={onSendMessageClick}
              dialogsPage={state}
            />
          );
        }
      }
    </StoreContext.Consumer>
  );
};

// 10.20

const SuperDialogsContainer = connect()(Dialogs);

export default DialogsContainer;
