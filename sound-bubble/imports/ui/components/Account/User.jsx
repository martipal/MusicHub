import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

class User extends Component {
  formatUserInfo(title, detail) {
    return (
      <dl className="user-detail">
        <dt>{title}</dt>
        <dd>{detail}</dd>
      </dl>
    );
  }

  render() {
    const { user, myGroupsReady } = this.props;
    let spotifyUrl = 'https://open.spotify.com/user/' + user.id;

    let userImage;
    if (user.images.length===0){
      userImage="https://cdn4.iconfinder.com/data/icons/staff-management-vol-1/72/38-512.png";
    } else {
      userImage = user.images[0].url;
    }

    return (
      <div className="user-container">
        <div className="user-left">
          <img width="150" src={userImage} />
          <br />
        </div>
        <div className="user-right">
          <h3>{user.display_name}</h3>
          <div className="user-info">
            {this.formatUserInfo(
              'Groups',
              myGroupsReady && Meteor.user().groupIds
                ? Meteor.user().groupIds.length
                : 0
            )}
            {this.formatUserInfo('Email', user.email)}
          </div>
          <a href={spotifyUrl}>Go To Your Spotify</a>
          <br />
          <a href="https://www.spotify.com/account/apps/?_ga=2.100345246.1881641136.1561931040-1289360233.1558571744">
            Manage Spotify App Access
          </a>
          <div className="logout">
            <AccountsUIWrapper />
          </div>
        </div>
      </div>
    );
  }
}

export default withTracker(props => {
  return {
    myGroupsReady: Meteor.subscribe('myGroupIds').ready()
  };
})(User);
