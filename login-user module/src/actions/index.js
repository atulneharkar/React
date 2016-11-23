import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_USERS,
  FETCH_USER
} from './types';

//const ROOT_URL = '././users.json';

export function authenticateUser({ email, password }) {
  return function(dispatch) {
    var authStatus = false;
    
    let userList = getUsers() || [];
    userList.forEach(function (arrayItem) {
      if(arrayItem.email === email && arrayItem.password === password) {
        authStatus = true;
      }
    });

    if(authStatus) {
      dispatch({ type: AUTH_USER });
      getUserList();
      localStorage.setItem('authenticated', true);
      browserHistory.push('/displayUsers');
    } else {
      dispatch(authError('Please enter a valid Username and Password'));
    }
  }
}

export function getUserList() {
  return function(dispatch) {
    let userList = getUsers() || [];
    dispatch({
        type: FETCH_USERS,
        payload:  userList
    });
  }
}

export function logoutUser() {
  localStorage.removeItem('authenticated');
  return { type: UNAUTH_USER };
}

export function addUser({ fname, lname, dob, address, email, password }, authStatus) {
  return function(dispatch) {
    // axios.post()
    //   .then(response => {
    //
    //   })
    //   .catch(() => {
    //
    //   });
    let id = 1;
    let newId;

    let userList = getUsers() || [];

    if(userList.length) {
      newId = userList[userList.length - 1].id + 1;
    }

    let userObj = {
      'id': id,
      'fname': fname,
      'lname': lname,
      'dob': dob,
      'address': address,
      'email': email,
      'password': password
    }

    if(newId) {
      userObj.id = newId;
    }

    userList.push(userObj);
    localStorage.setItem('users', JSON.stringify(userList));
    if(authStatus) {
      browserHistory.push('/displayUsers');
    } else {
      browserHistory.push('/registerSuccessful');
    }
  }
}

export function updateUser({ id, fname, lname, dob, address, email, password }) {
  return function(dispatch) {
    let userList = getUsers() || [];

    userList.map((user) => {
      if(user.id == id) {
        user.fname = fname;
        user.lname = lname;
        user.dob = dob;
        user.address = address;
        user.email = email;
        if(password) {
          user.password = password;
        }
      }
    });

    localStorage.setItem('users', JSON.stringify(userList));

    browserHistory.push('/displayUsers');
  }
}

export function getUsers() {
  return JSON.parse(localStorage.getItem('users'));
}

export function getUserById(userId) {
  return function(dispatch) {
    let userList = getUsers() || [];
    let newUser = {};

    userList.map((user) => {
      if(user.id == userId) {
        newUser = user;
      }
    });

    dispatch({
        type: FETCH_USER,
        payload: newUser
    });
  }
}

export function deleteUsers(userId) {
  return function(dispatch) {
    let userList = getUsers() || [];
    let newUserList = [];
    userList.map((user) => {
      if(user.id !== userId) {
        newUserList.push(user);
      }
    });
    localStorage.setItem('users', JSON.stringify(newUserList));

    dispatch({
        type: FETCH_USERS,
        payload:  newUserList
    });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
