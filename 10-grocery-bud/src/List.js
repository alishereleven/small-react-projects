import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({ items, changeMode, removeItem }) => {
  return (
    items.map((item, index) => (
      <article className='grocery-item' key={index}>
        <p className='title'>{item}</p>
        <div>
          <button className='edit-btn' onClick={() => changeMode(index)}>
            <FaEdit />
          </button>
          <button className='delete-btn' onClick={() => removeItem(item)}>
            <FaTrash />
          </button>
        </div>
      </article>
    ))
  );
}

export default List;
