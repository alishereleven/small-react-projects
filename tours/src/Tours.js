import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, deleteOnClick })  => {
  return (
    tours.map(tour => (
      <Tour tour={tour} deleteOnClick={deleteOnClick} key={tour.id}/>
    ))
  )
}

export default Tours