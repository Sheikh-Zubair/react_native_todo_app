import { combineReducers } from 'redux';

// reducers
import todoListReducer from './todoListReducer';
import myListReducer from './myListReducer';

export default combineReducers({
  todoListReducer,
  myListReducer,
});
