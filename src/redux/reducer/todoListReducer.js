import {
  LIST_HEADING_CHANGE,
  LIST_ITEM_CHECKED,
  ADD_ITEM_TO_LIST,
  LOAD_LIST,
  CLEAR_REDUCER,
} from '../../constants';
import { ListInitialState } from '../state';

export default (state = { ...ListInitialState }, { type, payload }) => {
  switch (type) {
    case LIST_HEADING_CHANGE:
      return { ...state, listHeading: payload };
    case LIST_ITEM_CHECKED:
      return { ...state, listItem: payload };
    case ADD_ITEM_TO_LIST:
      return { ...state, listItem: payload };
    case LOAD_LIST:
      return { ...payload };
    case CLEAR_REDUCER:
      return { ...ListInitialState };
    default:
      return state;
  }
};
