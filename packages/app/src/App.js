import { useCallback, useEffect, useState } from 'react';

import './App.css';
import add from './redux/actions/add';
import AddBox from './ui/AddBox';
import fetch from './redux/actions/fetch';
import remove from './redux/actions/remove';
import ToDoList from './ui/ToDoList';
import toggle from './redux/actions/toggle';
import { backward } from './redux/actions/backward';
import { forward } from './redux/actions/forward';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const [addBoxValue, setAddBoxValue] = useState('Buy magazines');
  const handleAdd = useCallback(() => {
    dispatch(add(addBoxValue));
    setAddBoxValue('');
  }, [addBoxValue, dispatch, setAddBoxValue]);
  const handleAddBoxChange = useCallback(nextValue => setAddBoxValue(nextValue), [setAddBoxValue]);

  const handleBackward = useCallback(() => {
    dispatch(backward());
  }, [dispatch]);

  const handleForward = useCallback(() => {
    dispatch(forward());
  }, [dispatch]);

  const todos = useSelector(state =>
    state.currentState.map(todo => ({ checked: todo.toggled, text: todo.content, id: todo.id }))
  );

  const handleItemComplete = useCallback(
    itemId => {
      dispatch(toggle(itemId, true));
    },
    [dispatch]
  );

  const handleItemRemove = useCallback(
    itemId => {
      dispatch(remove(itemId));
    },
    [dispatch]
  );

  const handleItemUncomplete = useCallback(
    itemId => {
      dispatch(toggle(itemId, false));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetch());
  }, [dispatch]);

  return (
    <div className="App">
      <ToDoList
        items={todos}
        onItemComplete={handleItemComplete}
        onItemRemove={handleItemRemove}
        onItemUncomplete={handleItemUncomplete}
      />
      <AddBox onAdd={handleAdd} onChange={handleAddBoxChange} value={addBoxValue} />
      <button onClick={handleBackward}>Undo</button>
      <button onClick={handleForward}>Redo</button>
    </div>
  );
}

export default App;
