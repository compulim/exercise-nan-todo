import { ADD_FULFILLED } from '../actions/add';
import { FETCH_FULFILLED } from '../actions/fetch';
import { REMOVE_FULFILLED } from '../actions/remove';
import { TOGGLE_FULFILLED } from '../actions/toggle';

export const todos = (
  state = {
    currentState: [
      {
        id: '999',
        content: 'Buy magazines'
      }
    ],
    history: [],
    future: []
  },
  action
) => {
  switch (action.type) {
    case ADD_FULFILLED:
    case FETCH_FULFILLED:
    case REMOVE_FULFILLED:
    case TOGGLE_FULFILLED:
      console.log(action.type, action.payload);

      return {
        ...state,
        history: [...state.history, state.currentState],
        future: [],
        currentState: action.payload.items
      };
    case 'BACKWARD':
      if (state.history.length === 0) return state;
      console.log(state);
      const historyState = state.history.pop();
      return {
        ...state,
        history: [...state.history],
        future: [state.currentState, ...state.future],
        currentState: historyState
      };
    case 'FORWARD':
      if (state.future.length === 0) return state;
      const futureState = state.future.shift();
      return {
        ...state,
        history: [...state.history, state.currentState],
        future: [...state.future],
        currentState: futureState
      };
    default:
      return state;
  }
};
