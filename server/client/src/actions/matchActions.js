import axios from 'axios';
import {
  RECIEVE_MATCHES,
  LOADING_MATCHES,
} from './types';

function requestMatches() {
  return {
    type: LOADING_MATCHES,
  };
}

export function receiveMatches(response) {
  console.log(response);
  return {
    type: RECIEVE_MATCHES,
    matches: response.matches,
    lastMatchID: response.lastMatchDisplayed,
  };
}

export function loadMatches() {
  return function (dispatch) {
    dispatch(requestMatches());

    return axios.get('/matches')
      .then(
        response => response.json(),

        error => console.log('An error occured.', error),
      )
      .then(json =>
        dispatch(receiveMatches(json)));
  };
}
