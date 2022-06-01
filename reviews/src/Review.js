import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [id, setId] = useState(people[0].id)
  const { name, job, image, text } = people[id - 1]

  function prevP() {
    setId(prevId => (
      prevId === 1 ? people.length : prevId - 1
    ))
  }

  function nextP() {
    setId(prevId => (
      prevId === people.length ? 1 : prevId + 1
    ))
  }

  function randP() {
    setId(Math.ceil(Math.random() * people.length))
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} className='person-img'/>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div>
        <button className='prev-btn' onClick={prevP}>{`<`}</button>
        <button className='next-btn' onClick={nextP}>{`>`}</button>
      </div>
      <button className='random-btn' onClick={randP}>surprise me</button>
    </article>
  )
}

export default Review