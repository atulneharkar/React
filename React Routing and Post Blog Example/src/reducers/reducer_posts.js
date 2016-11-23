import { FETCH_POSTS, FETCH_POST } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  	case FETCH_POST:
    //add data to the current state
    return { ...state, post: action.payload.data };

    case FETCH_POSTS:
    //add data to the current state
    return { ...state, all: action.payload.data };

    default: 
    return state;
  }
}