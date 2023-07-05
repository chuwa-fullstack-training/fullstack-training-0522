const { createStore } = require('redux');

const initialState = {
  count: 0
};

// counterRefucer.js
// action is an object that describes what happened
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      };
    case 'RESET':
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

// (action.js)
// action creator 
const increment = () => ({
  type: 'INCREMENT'
 });

// dispatch can take an action object or an action creator
store.dispatch(increment());
store.dispatch({ type: 'INCREMENT' });

// store.dispatch({ type: 'ADD_TODO', text: 'drink water' });
