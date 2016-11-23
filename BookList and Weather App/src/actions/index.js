import axios from 'axios';

export function selectBook(book) {
	//selecBook is an ActionCreator, it needs to return an action,
	//an object with a type property.
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}

const API_KEY = '3df555e31bd32b086d1e30031c5524d1';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'; 

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return {
		//type: 'FETCH_WEATHER'
		type: FETCH_WEATHER,
		payload: request
	};
}