import {
  FETCH_USERS,
  FETCH_USER
} from '../actions/types';

const INITIAL_STATE = { all: [], userDetail: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_USERS:
      return { ...state, all: action.payload }

    case FETCH_USER:
      return { ...state, userDetail: action.payload }
  }

  return state;
}
