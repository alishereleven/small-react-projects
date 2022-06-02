import React from 'react';

const Menu = ({ items, menu }) => {
  return (
    <div className='section-center'>
      {
        items.map(({ id, title, category, price, img, desc}) => (
          (menu === 'all' || menu === category) && (
            <div key={id} className='menu-item'>
              <img src={img} alt={title} className='photo'/>
              <div className='item-info'>
                <header>
                  <h4>{title}</h4>
                  <h4 className='price'>${price}</h4>
                </header>
                <p className='item-text'>{desc}</p>
              </div>
            </div>
          )
        ))
      }
    </div>
  );
}

export default Menu