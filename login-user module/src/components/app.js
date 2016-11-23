import React, { Component } from 'react';
import Header from './header';
import AdminNav from './admin/adminNav';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AdminNav />
        {this.props.children}
      </div>
    );
  }
}
