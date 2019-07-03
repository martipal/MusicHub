import React from 'react';
import '../../stylesheets/Groups.css';

export default class GroupMember extends React.Component {

    leaveGroup(){
      // TODO: remove current user from current group
    }

    render() {
        let groupMemberDiv;

        if (this.props.userImage === ""){
            this.props.userImage ="https://www.loginradius.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png";
        }


        if (this.props.isCurrentUser==="true"){
          groupMemberDiv = (<li className="song_card_container">
                <span className="song_card">
                        <div className="profile_photo">
                            <img className="user_photo" src={this.props.userImage} onClick={() => {window.open(this.props.userImage.toString(), 'popup', 'width=650,height=450' ); return false;}}/>
                        </div>

                        <div className="username">
                        <p className="group_member_username">
                        {this.props.userName} (Me)
                        </p>
                        </div>
                        <div className="option_container" onClick={() => this.leaveGroup()}><div className="glyphicon glyphicon-log-out white"><span className="tooltiptext">Leave Group</span></div></div>      
                </span>
        </li>);
        } else {
          groupMemberDiv = (<li className="song_card_container">
                <span className="song_card">
                        <div className="profile_photo">
                            <img className="user_photo" src={this.props.userImage} onClick={() => {window.open(this.props.userImage.toString(), 'popup', 'width=650,height=450' ); return false;}}/>
                        </div>

                        <div className="username">
                        <p className="group_member_username">
                        {this.props.userName}
                        </p>
                        </div>    
                </span>
        </li>);
        }

        return (<div>{groupMemberDiv}</div>);
}
                                
}