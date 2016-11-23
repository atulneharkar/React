import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';

const ROOT_URL = '';

export function signinUser({ email, password }) {
  return function(dispatch) {
    //Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        //request success

        //update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });

        //save JWT token
        localStorage.setItem('token', 'this is server generated token'); //response.data.token

        //redirect to the Route '/feature'
        browserHistory.push('/feature');
      })
      .catch(() => {
        //request fails
        dispatch(authError('Bad Login Info'));
      })
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.removeItem('token');
  
  return { type: UNAUTH_USER };
}
