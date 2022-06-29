import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'

function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(nextSlide, 7500)
    return () => clearInterval(interval)
  }, [])
  
  function prevSlide() {
    setIndex(prevIndex => (
      prevIndex > 0 ? prevIndex - 1 : people.length - 1
    ))
  }

  function nextSlide() {
    setIndex(prevIndex => (
      prevIndex < people.length - 1 ? prevIndex + 1 : 0
    ))
  }

  return (
    <main>
      <section className='section'>
        <header className='title'>
          <h2><span>/</span>Reviews</h2>
        </header>
        <div className='section-center'>
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person

            let position = 'nextSlide'

            if (personIndex === index) {
              position = 'activeSlide'
            } else if (personIndex === (index > 0 ? index - 1 : people.length - 1)) {
              position = 'lastSlide'
            }

            return (
              <article key={id} className={position}>
                <img src={image} className='person-img' />
                <h4>{name}</h4>
                <p className='title'>{title}</p>
                <p className='text'>{quote}</p>
                <FaQuoteRight className='icon'/>
              </article>
            )
          })
          }
          <button className='prev' onClick={prevSlide}>
            <FiChevronLeft />
          </button>
          <button className='next' onClick={nextSlide}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </main>
  )
}

export default App