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
  if (!response.error) {
    return {
      type: RECIEVE_MATCHES,
      matches: response.matches,
      lastMatchID: response.lastMatchDisplayed,
    };
  }
  return {
    type: RECIEVE_MATCHES,
    matches: [],
    lastMatchID: response.lastMatchDisplayed,
  };
}

export function loadMatches(matchID) {
  const lastMatchID = matchID || 0;
  return function (dispatch) {
    dispatch(requestMatches());

    return axios.get(`/matches/${lastMatchID}`)
      .then(
        response => response.data,

        error => console.log('An error occured.', error),
      )
      .then(json =>
        dispatch(receiveMatches(json)));
  };
}
