import { TASKS } from '../../data/tasks';
import { TODO_DELETE, TODO_UPDATE } from '../actions/actionTypes';

const initialState = {
  tasks: TASKS,
};

const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_DELETE:
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
    case TODO_UPDATE:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          return {
            ...task,
            done: task.id === action.payload ? !task.done : task.done,
          };
        }),
      };
    default:
      return state;
  }
};

export default TaskReducer;
