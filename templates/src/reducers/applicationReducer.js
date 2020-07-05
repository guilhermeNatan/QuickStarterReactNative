import {LOADING_ACTION} from '../actions';

const INITIAL_STATE = {
  loading: false,
};
export default function applicationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOADING_ACTION:
      return {...state, loading: action.loading};
    default:
      return state;
  }
}
