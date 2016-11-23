import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../../actions';

class DisplayUsers extends Component {
  componentWillMount() {
    this.props.getUserList();
  }

  handleDeleteUser(userId) {
    this.props.deleteUsers(userId);
  }

  renderUsers() {
    if(this.props.userData) {
      let i = 1;
      return this.props.userData.map((user) => {
        return (
          <tr key={user.id}>
            <td>{i++}</td>
            <td>{user.fname}</td>
            <td>{user.lname}</td>
            <td>{user.dob}</td>
            <td>{user.address}</td>
            <td>{user.email}</td>
            <td><Link to={"editUser/" + user.id}>Edit</Link></td>
            <td><span onClick={() => this.handleDeleteUser(user.id)}>Delete</span></td>
          </tr>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <Link to="/register">Add User</Link>
        <table>
          <thead>
            <tr>
              <td>#</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>DOB</td>
              <td>Address</td>
              <td>Email</td>
              <td>Edit</td>
              <td>delete</td>
            </tr>
          </thead>
          <tbody>
            {this.renderUsers()}
          </tbody>
        </table>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    userData: state.user.all
  }
}

export default connect(mapStateToProps, actions)(DisplayUsers);
