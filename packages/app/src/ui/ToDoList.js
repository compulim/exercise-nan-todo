import PropTypes from 'prop-types';

import './ToDoList.css';
import ToDoListItem from './ToDoListItem';

const ToDoList = ({ items, onItemComplete, onItemRemove, onItemUncomplete }) => {
  return (
    items.length ?
      <ul className="to-do-list">
        {items.map(({ checked, id, text }) =>
          <ToDoListItem
            checked={checked}
            key={id}
            id={id}
            onComplete={onItemComplete}
            onRemove={onItemRemove}
            onUncomplete={onItemUncomplete}
          >
            {text}
          </ToDoListItem>
        )}
      </ul>
      :
      <div>List is empty. Add something.</div>
  );
};

ToDoList.defaultProps = {
  items: [],
  onItemComplete: undefined,
  onItemRemove: undefined,
  onItemUncomplete: undefined
};

ToDoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    checked: PropTypes.bool,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    text: PropTypes.string.isRequired
  }).isRequired),
  onItemComplete: PropTypes.func,
  onItemRemove: PropTypes.func,
  onItemUncomplete: PropTypes.func
};

export default ToDoList;