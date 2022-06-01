import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [id, setId] = useState(people[0].id)
  const { name, job, image, text } = people[id - 1]

  function prevPerson() {
    setId(prevId => (
      prevId === 1 ? people.length : prevId - 1
    ))
  }

  function nextPerson() {
    setId(prevId => (
      prevId === people.length ? 1 : prevId + 1
    ))
  }

  function generateRandomId() {
    return Math.ceil(Math.random() * people.length)
  }

  function randPerson() {
    setId(prevId => {
      let newId = generateRandomId()
      while (prevId === newId) {newId = generateRandomId()}
      return newId
    })
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} className='person-img' alt={name}/>
        <div className='quote-icon'><FaQuoteRight /></div>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div>
        <button className='prev-btn' onClick={prevPerson}><FaChevronLeft /></button>
        <button className='next-btn' onClick={nextPerson}><FaChevronRight /></button>
      </div>
      <button className='random-btn' onClick={randPerson}>surprise me</button>
    </article>
  )
}

export default Review