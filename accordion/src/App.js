import React from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  return (
    <main>
      <section className='container'>
        <h3>questions and answers about login</h3>
        <div>
          {
            data.map(({ id, title, info }) => (
              <SingleQuestion
                key={id}
                question={title}
                answer={info}
              />
            ))
          }
        </div>
      </section>
    </main>
  )
}

export default App