import { ADD_TODO, TOGGLE_ONE_TODO, TOGGLE_ALL_COMPLETE, CLEAR_COMPLETED } from './actions';

const initialState = { todos: [], count: 0 };

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: action.id, value : action.value, completed: false }],
        count: state.count + 1,
      };
    case TOGGLE_ONE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed),
      };
    case TOGGLE_ALL_COMPLETE:
      const isAllCompleted = state.todos.every(todo => todo.completed);
      return {
        ...state,
        todos: state.todos.map(todo => ({ ...todo, completed: !isAllCompleted })),
      };
    default:
      return state;
  }
};

export default todoReducer;