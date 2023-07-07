export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_ONE_TODO = 'TOGGLE_ONE_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const TOGGLE_ALL_COMPLETE = 'TOGGLE_ALL_COMPLETE';

export const addTodo = (id, value) => ({
  type: ADD_TODO,
  id,
  value,
});

export const toggleOneComplete = id => ({
  type: TOGGLE_ONE_TODO,
  id,
});

export const toggleAllComplete = () => ({
  type: TOGGLE_ALL_COMPLETE,
});

export const clearComplete = () => ({
  type: CLEAR_COMPLETED,
});