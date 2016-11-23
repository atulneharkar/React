import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_WEATHER:

		//we can use push here but do not mutate the state, instead return a new instance of state by concatinating the data
		return state.concat([action.payload.data]);
		//es 6 syntax, return [action.payload.data, ...state]; // [city city city]
	}
	return state;
}