import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'

function App() {
  const [index, setIndex] = useState(0)

  return (
    <main>
      <section className='section'>
        <header className='title'>
          <h2><span>/</span>Reviews</h2>
        </header>
        <div className='section-center'>
          <article className='activeSlide'>
            <img src={data[index].image} className='person-img' />
            <h4>{data[index].name}</h4>
            <p className='title'>{data[index].title}</p>
            <p className='text'>{data[index].quote}</p>
            <FaQuoteRight className='icon'/>
          </article>
          <button className='prev'>
            <FiChevronLeft />
          </button>
          <button className='next'>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </main>
  )
}

export default App