import React from 'react';

const Categories = ({ categories, setMenu }) => {
  return (
    <div className='btn-container'>
      {
        categories.map((category, index) => (
          <button
            key={index}
            className='filter-btn'
            onClick={() => setMenu(category)}
          >
            {category}
          </button>
        ))
      }
    </div>
  )
}

export default Categories