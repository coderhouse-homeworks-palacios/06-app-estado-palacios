import { createStore, combineReducers } from 'redux';

import TaskReducer from './reducers/task.reducer';

const RootReducer = combineReducers({
  tasks: TaskReducer,
});

export default createStore(RootReducer);
