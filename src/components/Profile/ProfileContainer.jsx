import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {useMatch} from "react-router-dom";
import {usersAPI} from "../../api/api";

export const withRouter = (Component) => {
  let RouterComponent = (props) => {
    const match = useMatch('/profile/:userId/');
    return <Component {...props} match={match} />;
  };
  return RouterComponent;
};

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    usersAPI.getProfile(userId)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile } )(WithUrlDataContainerComponent);
