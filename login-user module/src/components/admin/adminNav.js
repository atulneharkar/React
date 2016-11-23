import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class AdminNav extends Component {
  renderLinks() {
    if(this.props.authenticated) {
      return [
        <li key={1}>
          <Link to="/displayUsers">Users</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <ul>
        {this.renderLinks()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
      authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(AdminNav);
