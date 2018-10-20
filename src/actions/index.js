import axios from 'axios';
const API_KEY = '4c00249443f09d5313a6a0ae45969fe1';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ind`;
  const request = axios.get(url);
  // below we are sending a promise as payload
  // but redux-promise middleware resolves the promise and updates the payload
  // therefore in the reducer we get the resolved promised data
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}