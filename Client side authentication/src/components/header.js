import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  renderLinks() {
    if(this.props.authenticated) {
      //show a link to sign out
      return(
        <li>
          <Link to="/signout">Sign Out</Link>
        </li>
      );
    } else {
      //show a link to sign in and sign up
      return [
        <li  key={1}>
          <Link to="/signin">Sign In</Link>
        </li>,
        <li key={2}>
          <Link to="/signup">Sign Up</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <div>
        <Link to="/" >Redux Auth</Link>
        <ul>
          { this.renderLinks() }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header);
