import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Login extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  }
  
  componentWillMount() {
    if (this.props.authenticated) {
      this.context.router.push('/');
    }
  }

  handleFormSubmit(props) {
    this.props.authenticateUser(props);
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div className="error">{this.props.errorMessage}</div>
      );
    }
  }

  render() {
    const { fields: { email, password }, handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className={`form-group ${!email.active && email.touched && email.invalid ? 'has-danger' : ''}`}>
            <label htmlFor="email">Email: </label>
            <input type="text" id="email" {...email} />
            {!email.active && email.touched && email.error && <p className="error">{email.error}</p>}
          </div>

          <div className={`form-group ${!password.active && password.touched && password.invalid ? 'has-danger' : ''}`}>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" {...password} />
            {!password.active && password.touched && password.error && <p className="error">{password.error}</p>}
          </div>

          <div>
            <button type="submit">Login</button>
          </div>

          {this.renderAlert()}
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.email) {
    errors.email = 'Enter Email';
  }

  if(!values.password) {
    errors.password = 'Enter Password';
  }

  return errors;
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    authenticated: state.auth.authenticated
  }
}

export default reduxForm({
  form: 'LoginForm',
  fields: ['email', 'password'],
  validate
}, mapStateToProps, actions)(Login);
