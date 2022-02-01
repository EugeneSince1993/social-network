// old mapdispatchtoprops from UsersContainer

import {getUsers} from "../../src/api/api";
import * as axios from "axios";

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    }
  };
};

onPageChanged = (pageNumber) => {
  getUsers(pageNumber, this.props.pageSize)

  this.props.setCurrentPage(pageNumber);
  this.props.toggleIsFetching(true);

  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true})
    .then(response => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(response.data.items);
    });
}