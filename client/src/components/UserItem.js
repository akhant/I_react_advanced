import React, { Component } from "react";

export class UserItem extends Component {
  render() {
    const { user } = this.props;
    return (
      <li className="clearfix" >
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg"
          alt="avatar"
        />
        <div className="about">
          <div className="name">{user.userName}</div>
          <div className="status">
            <i className="fa fa-circle online" /> online
          </div>
        </div>
      </li>
    );
  }
}

export default UserItem;
