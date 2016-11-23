import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  renderList() {
    if(this.props.authenticated) {
      return (
        <li key={4}>
          <Link to="/logout">Logout</Link>
        </li>
      );
    } else {
      return [
        <li key={1}>
          <Link to="/login">Login</Link>
        </li>,
        <li key={2}>
          <Link to="/register">Register</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header);
