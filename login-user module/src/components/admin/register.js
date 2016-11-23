import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Register extends Component {
  handleFormSubmit(props) {
    if(this.props.authenticated) {
      this.props.addUser(props, true);
    } else {
      this.props.addUser(props, false);
    }

  }

  render() {

    const { fields: { fname, lname, dob, address, email, password, confirmPassword }, handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className={`form-group ${!fname.active && fname.touched && fname.invalid ? 'has-danger' : ''}`}>
            <label htmlFor="fname">First Name: </label>
            <input type="text" id="fname" {...fname} />
            {!fname.active && fname.touched && fname.error && <p className="error">{fname.error}</p>}
          </div>

          <div className={`form-group ${!lname.active && lname.touched && lname.invalid ? 'has-danger' : ''}`}>
            <label htmlFor="lname">Last Name: </label>
            <input type="text" id="lname" {...lname} />
            {!lname.active && lname.touched && lname.error && <p className="error">{lname.error}</p>}
          </div>

          <div className={`form-group ${!dob.active && dob.touched && dob.invalid ? 'has-danger' : ''}`}>
            <label htmlFor="dob">Date of Birth: </label>
            <input type="date" id="dob" {...dob} />
            {!dob.active && dob.touched && dob.error && <p className="error">{dob.error}</p>}
          </div>

          <div className={`form-group ${!address.active && address.touched && address.invalid ? 'has-danger' : ''}`}>
            <label htmlFor="address">Address: </label>
            <input type="text" id="address" {...address} />
            {!address.active && address.touched && address.error && <p className="error">{address.error}</p>}
          </div>

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

          <div className={`form-group ${!confirmPassword.active && confirmPassword.touched && confirmPassword.invalid ? 'has-danger' : ''}`}>
            <label htmlFor="confirmPassword">Confirm Password: </label>
            <input type="password" id="confirmPassword" {...confirmPassword} />
            {!confirmPassword.active && confirmPassword.touched && confirmPassword.error && <p className="error">{confirmPassword.error}</p>}
          </div>

          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.fname) {
    errors.fname = 'Enter First Name';
  }

  if(!values.lname) {
    errors.lname = 'Enter Last Name';
  }

  if(!values.dob) {
    errors.dob = 'Enter Date of Birth';
  }

  if(!values.address) {
    errors.address = 'Enter Address';
  }

  if(!values.email) {
    errors.email = 'Enter Email';
  }

  if(!values.password) {
    errors.password = 'Enter Password';
  }

  if(!values.confirmPassword) {
    errors.confirmPassword = 'Enter ConfirmPassword';
  }

  if(values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Entered password does not match';
  }

  return errors;
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default reduxForm({
  form: 'UserNewForm',
  fields: ['fname', 'lname', 'dob', 'address', 'email', 'password', 'confirmPassword'],
  validate
}, mapStateToProps, actions)(Register);
