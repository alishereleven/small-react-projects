import React, { useState } from 'react';

const Tour = (props) => {
  const [tour, setTour] = useState(props.tour)
  const [hide, setHide] = useState(true)
  const { image, info, name, price } = tour

  return(
    tour ? (
    <article className='single-tour'>
      <img src={image} alt={name}/>
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {hide ? `${info.slice(0, 200)}...` : info}
          <button onClick={() => setHide(prevHide => !prevHide)}>
            {hide ? 'show more' : 'show less'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => setTour([])}>not interested</button>
      </footer>
    </article>
    ) :
    (<> </>)
  )
}

export default Tour