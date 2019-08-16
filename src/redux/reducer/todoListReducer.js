import {LIST_HEADING_CHANGE} from '../../constants';

const todoListInitialState = {
  listHeading: null,
  listItem: [{title: null, isDone: false}],
};

export default (state = {...todoListInitialState}, {type, payload}) => {
  switch (type) {
    case LIST_HEADING_CHANGE:
      return {...state, listHeading: payload};
    default:
      return state;
  }
};
