import React from "react";
import {Navigate} from "react-router-dom";

export const withAuthRedirect = (Component) => {
  let WrapperContainer = (props) => {
    if (!props.isAuth) {
      return <Navigate to="/login" />;
    }
    return <Component {...this.props} />;
  };
  return WrapperContainer;
};
