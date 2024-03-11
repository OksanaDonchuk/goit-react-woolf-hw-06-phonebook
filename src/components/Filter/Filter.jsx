import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'store/filterSlise';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const onChangeFilter = event => {
    const { value } = event.target;
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.search_container}>
      <input
        className={css.search_input}
        type="text"
        value={filter}
        onChange={onChangeFilter}
        placeholder="Search contacts"
      />
    </div>
  );
};

export default Filter;
