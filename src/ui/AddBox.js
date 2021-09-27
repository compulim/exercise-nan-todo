import { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

import './AddBox.css';

const AddBox = ({ onAdd, onChange, value }) => {
  const onAddRef = useRef();
  const onChangeRef = useRef();

  onAddRef.current = onAdd;
  onChangeRef.current = onChange;

  const handleChange = useCallback(({ target: { value } }) => onChangeRef?.current(value), [onChangeRef]);
  const handleSubmit = useCallback(event => {
    event.preventDefault();
    onAddRef.current?.();
  }, [onAddRef]);

  return (
    <form className="add-box" onSubmit={handleSubmit}>
      <input className="add-box__input" onChange={handleChange} type="text" value={value} />
      <input className="add-box__add-button" disabled={!value} onClick={handleSubmit} type="submit" value="+" />
    </form>
  );
};

AddBox.defaultProps = {
  onAdd: undefined,
  onChange: undefined,
  value: ''
};

AddBox.propTypes = {
  onAdd: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default AddBox;
