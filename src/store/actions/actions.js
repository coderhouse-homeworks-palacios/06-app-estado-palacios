import { TODO_ADD, TODO_DELETE, TODO_UPDATE } from './actionTypes';

export const deleteTodo = (id) => {
  return { type: TODO_DELETE, payload: id };
};

export const updateTodo = (id) => {
  return { type: TODO_UPDATE, payload: id };
};
