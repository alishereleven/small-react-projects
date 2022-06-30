import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

function Info({ job }) {
  const { title, company, dates, duties } = job
  
  return (
    <div className='job-info'>
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className='job-date'>{dates}</p>
      {
        duties.map((duty, index) => (
          <div key={index} className='job-desc'>
            <FaAngleDoubleRight className='job-icon'/>
            <p>{duty}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Info