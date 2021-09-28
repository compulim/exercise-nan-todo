import { useCallback, useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './ToDoListItem.css';

const ToDoListItem = ({ checked, children, id, onComplete, onRemove, onUncomplete }) => {
  const idRef = useRef();
  const onCompleteRef = useRef();
  const onRemoveRef = useRef();
  const onUncompleteRef = useRef();

  idRef.current = id;
  onCompleteRef.current = onComplete;
  onRemoveRef.current = onRemove;
  onUncompleteRef.current = onUncomplete;

  const handleChange = useCallback(({ target: { checked } }) => {
    const { current: id } = idRef;

    checked ? onCompleteRef.current?.(id) : onUncompleteRef.current?.(id);
  }, [idRef, onCompleteRef, onUncompleteRef]);

  const handleRemove = useCallback(() => {
    const { current: id } = idRef;

    onRemoveRef.current?.(id);
  }, [idRef, onRemoveRef]);

  return (
    <li className={classNames('to-do-list-item', { 'to-do-list-item--completed': checked })}>
      <label>
        <input checked={checked} className="to-do-list-item__checkbox" onChange={handleChange} type="checkbox" />
        <span className="to-do-list-item__body">{children}</span>
        <button className="to-do-list-item__remove-button" onClick={handleRemove} type="button">&times;</button>
      </label>
    </li>
  );
};

ToDoListItem.defaultProps = {
  checked: false,
  children: undefined,
  onComplete: undefined,
  onRemove: undefined,
  onUncomplete: undefined
};

ToDoListItem.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.any,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onComplete: PropTypes.func,
  onRemove: PropTypes.func,
  onUncomplete: PropTypes.func
};

export default ToDoListItem;