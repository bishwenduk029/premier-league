import {
  RECIEVE_MATCHES,
  LOADING_MATCHES,
} from '../actions/types';

const initialState = {
  matchesLoading: false,
  lastMatch: 0,
  matches: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_MATCHES:
      return Object.assign({}, state, {
        matchesLoading: true,
      });

    case RECIEVE_MATCHES:
      return Object.assign({}, state, {
        matches: action.matches,
        lastMatch: action.lastMatch,
      });

    default:
      return state;
  }
}
