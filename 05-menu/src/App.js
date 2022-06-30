import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const categories = ['all', ...new Set(items.map(item => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)

  function selectCategory(category) {
    setMenuItems(
      category === 'all' ?
        items
        :
        items.filter(item => (category === item.category))
    )
  }

  return (
    <main>
      <section className='menu section'>
        <header className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </header>
        <Categories categories={categories} selectCategory={selectCategory}/>
        <Menu menuItems={menuItems}/>
      </section>
    </main>
  )
}

export default App