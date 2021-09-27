import { useCallback, useState } from 'react';

import './App.css';
import AddBox from './ui/AddBox';
import ToDoList from './ui/ToDoList';
import { add } from './redux/actions/add';
import { remove } from './redux/actions/remove';
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from './redux/actions/toggle';

function App() {
  const dispatch = useDispatch()

  const [addBoxValue, setAddBoxValue] = useState('Buy magazines');
  const handleAdd = useCallback(
    () => {
      dispatch(add(addBoxValue));
      setAddBoxValue('');
    },
    [addBoxValue, dispatch, setAddBoxValue]);
  const handleAddBoxChange = useCallback(nextValue => setAddBoxValue(nextValue), [setAddBoxValue]);

  const todos = useSelector((state) => state.map(todo => ({ checked: todo.toggled, text: todo.content, id: todo.id })));

  const handleItemComplete = useCallback(itemId => {
    dispatch(toggle(itemId, true));
  }, [dispatch]);

  const handleItemRemove = useCallback(itemId => {
    dispatch(remove(itemId));
  }, [dispatch]);

  const handleItemUncomplete = useCallback(itemId => {
    dispatch(toggle(itemId, false));
  }, [dispatch]);

  return (
    <div className="App">
      <ToDoList items={todos} onItemComplete={handleItemComplete} onItemRemove={handleItemRemove} onItemUncomplete={handleItemUncomplete} />
      <AddBox onAdd={handleAdd} onChange={handleAddBoxChange} value={addBoxValue} />
    </div>
  );
}

export default App;
