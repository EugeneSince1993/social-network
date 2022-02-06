import React from "react";
import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: true
  }
  // 22.15
  render() {
    return (
      <div>
        {
          !this.state.editMode &&
            <div>
              <span>{this.props.status}</span>
            </div>
        }
        {
          this.state.editMode &&
            <div>
              <input value={this.props.status} />
            </div>
        }
      </div>
    );
  }
}

export default ProfileStatus;
