const initialState = {};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      const maxId =
        Object.keys(state).length > 0 ? Math.max(...Object.keys(state)) + 1 : 1;
      const newTodo = { name: action.name, done: false };
      console.log(maxId, newTodo);
      return { ...state, [maxId]: newTodo };
    }
    case "REMOVE": {
      const newList = {};
      Object.entries({...state}).forEach(([id, { name, done }]) => {
        if (!done) newList[id] = { name: name, done: done };
      });
      return newList;
    }
    case "CHECK_ONE": {
      return {
        ...state,
        [action.id]: {
          name: state[action.id].name,
          done: !state[action.id].done,
        },
      };
    }
    case "CHECK_ALL": {
      const newList = {};
      Object.entries({ ...state }).forEach(([id, { name, done }]) => {
        newList[id] = { name: name, done: action.checked };
      });
      console.log("checkall", newList);
      return newList;
    }
    default:
      return state;
  }
};

export default todoReducer;
