import React, { Component } from 'react';
import '../../stylesheets/Groups.css';
import Group from './Group.jsx';

export default class Groups extends Component {

  constructor() {
    super();
    this.state = { createGroupPopup: false };
    this.createGroup = this.createGroup.bind(this);
  }

  openForm() {
    this.setState({ createGroupPopup: true });
  }

  closeForm() {
    this.setState({ createGroupPopup: false });
  }

  createGroup(event) {
    let groupName = event.target.groupName.value.toString();
    // TODO: Create new group in db
    console.log(groupName);
    this.closeForm();
  }

  getGroupsForCurrentUser() {
    //TODO: get groups for current user
  }

  createGroupComponents() {
    //TODO: create a div containing all Groups that the user belongs to. Iterate through their groups and create a <Group> component for each one with props groupName, groupID, userIds. 
  }

  render() {
    let popup = (<div></div>);
    if (this.state.createGroupPopup === true) {
      popup = (<div className="form-popup" className="myForm">
        <form className="form-container" onSubmit={this.createGroup}>
          <label htmlFor="groupName"><b>Create New Group</b></label>
          <input type="text" placeholder="Enter Group Name" name="groupName" required />

          <button type="submit" className="btn">Create</button>
          <button type="button" className="btn cancel" onClick={() => this.closeForm()}>Cancel</button>
        </form>
      </div>);
    } 

    return (<div className="groups_container">
      <div className="heading_container">
        <h1 className="group_heading"> Groups </h1><div className="group_options"><div className="option_container" onClick={() => this.openForm()}><div className="glyphicon glyphicon-plus white"><span className="tooltiptext">Create New Group</span></div></div></div>
      
      
      </div>
      {popup}
      <Group groupName="" groupId="" usersIds="" />


    </div>);

  }
}



