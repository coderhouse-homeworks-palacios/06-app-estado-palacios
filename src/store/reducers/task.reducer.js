import { TASKS } from '../../data/tasks';

const initialState = {
  tasks: TASKS,
  selected: null,
};

const TaskReducer = (state = initialState, action) => {
  return state;
};

export default TaskReducer;
