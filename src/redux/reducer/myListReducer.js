import { ADD_TO_LISTS } from '../../constants';
import { Lists } from '../state';

export default (state = { Lists: Lists.slice() }, { type, payload }) => {
  switch (type) {
    case ADD_TO_LISTS:
      return { ...state, Lists: payload };
    default:
      return state;
  }
};
