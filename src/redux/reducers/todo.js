export const todos = (state = [{
  toggled: true,
  id: '1',
  content: 'Buy eggs'
}, {
  id: '2',
  content: 'Buy milk'
}], action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state, {
          id: action.id,
          content: action.content,
          toggled: false
        }];
    case 'TOGGLE':
      return state.map(todo =>
        (todo.id === action.id) ? { ...todo, toggled: action.toggled } : todo
      );
    case 'REMOVE':
      return state.filter(todo =>
        (todo.id !== action.id)
      );
    default:
      return state;
  }
}