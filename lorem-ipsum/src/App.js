import React, { useState } from 'react';
import data from './data';

function App() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState([]);

  function countParagraphs(event) {
    setValue(event.target.value)
  }

  function generateText(event) {
    event.preventDefault()
    setText(data.slice(0, value > 0 ? Math.min(value, data.length) : 1))
  }

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form'>
        <label htmlFor='amount'>Paragraphs:</label>
        <input
            type='number'
            name='amount'
            id='amount'
            value={value}
            onChange={countParagraphs}/>
        <button className='btn' onClick={generateText}>generate</button>
      </form>
      <article className='result'>
        {text.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </article>
    </section>
  );
}

export default App;
