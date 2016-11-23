import React from 'react';
import { Link } from 'react-router';

const RegisterSuccessful = () => {
  return (
    <div>
      You have Registered Successfully. <Link to="/login">Click here for Login</Link>.
    </div>
  );
}

export default RegisterSuccessful;
