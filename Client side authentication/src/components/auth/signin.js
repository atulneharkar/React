import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
  handleFormSubmit({ email, password}) {
    //need to do something to log user in
    this.props.signinUser({ email, password });
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div>{this.props.errorMessage}</div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div>
          <label>Email</label>
          <input {...email} />
        </div>

        <div>
          <label>Password</label>
          <input type="password" {...password} />
        </div>

        { this.renderAlert() }

        <div>
          <button type="submit">Sign in</button>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
