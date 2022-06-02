import React from 'react';

const Categories = ({ selectCategory }) => {
  const categories = ['all', 'breakfast', 'lunch', 'shakes']

  return (
    <div className='btn-container'>
      {
        categories.map((category, index) => (
          <button
            key={index}
            className='filter-btn'
            onClick={() => selectCategory(category)}
          >
            {category}
          </button>
        ))
      }
    </div>
  )
}

export default Categories