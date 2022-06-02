import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items)

  function selectCategory(category) {
    setMenuItems(
      category === 'all' ?
        items
        :
        items.filter(item => (
          category === item.category && item
        ))
    )
  }

  return (
    <main>
      <section className='menu section'>
        <header className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </header>
        <Categories selectCategory={selectCategory}/>
        <Menu menuItems={menuItems}/>
      </section>
    </main>
  )
}

export default App