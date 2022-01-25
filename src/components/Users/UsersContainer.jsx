import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, unfollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    }
    // 40-00 setUsers
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
