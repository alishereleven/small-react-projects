import React from 'react';
import Tour from './Tour';

const Tours = (props)  => {
  return (
    props.tours.map(tour => (
      <Tour tour={tour} key={tour.id}/>
    ))
  )
}

export default Tours