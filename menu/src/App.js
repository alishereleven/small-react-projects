import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menu, setMenu] = useState('all')
  const categories = ['all', 'breakfast', 'lunch', 'shakes']

  return (
    <main>
      <section className='menu section'>
        <header className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </header>
        <Categories categories={categories} setMenu={setMenu}/>
        <Menu items={items} menu={menu}/>
      </section>
    </main>
  )
}

export default App