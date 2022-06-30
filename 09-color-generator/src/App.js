import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [text, setText] = useState('#aa44aa')
  const [color, setColor] = useState(new Values('#aa44aa'));
  const [error, setError] = useState(false)

  function changeColor(event) {
    event.preventDefault();
    try {
      setColor(new Values(text));
      setError(false);
    } catch {
      setError(true);
    }
  }
  
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={changeColor}>
          <input
            placeholder='#aa44aa'
            onChange={event => setText(event.target.value)}
            className={error ? 'error' : null}
          />
          <button className='btn'>submit</button>
        </form>
      </section>
      <section className='colors'>{
        color.all().map((color, index) => (
          <SingleColor
            hex={color.hexString()}
            type={color.type}
            weight={color.weight}
            key={index}
          />
        ))
      }</section>
    </>
  );
}

export default App;
