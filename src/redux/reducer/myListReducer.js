import {
  ADD_TO_LISTS,
  LISTS_ADDED_SUCCESS,
  LISTS_ADDED_FAILURE,
  FETCH_LISTS_SUCCESS,
  UPDATE_LISTS,
} from '../../constants';
import { Lists } from '../state';

export default (state = { Lists: Lists.slice(), loading: false }, { type, payload }) => {
  switch (type) {
    case ADD_TO_LISTS:
      return { ...state, Lists: payload, loading: true };
    case UPDATE_LISTS:
      return { ...state, Lists: payload };
    case LISTS_ADDED_SUCCESS:
      return { ...state, loading: false };
    case LISTS_ADDED_FAILURE:
      return { ...state, loading: false };
    case FETCH_LISTS_SUCCESS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
