import React, { useState } from 'react';

const Tour = ({ tour, deleteOnClick}) => {
  const [infoHidden, setInfoHidden] = useState(true)
  const { id, image, info, name, price } = tour

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
            {infoHidden ? `${info.slice(0, 200)}...` : info}
            <button onClick={() => setInfoHidden(prevHide => !prevHide)}>
              {infoHidden ? 'read more' : 'show less'}
            </button>
          </p>
          <button className='delete-btn' onClick={() => deleteOnClick(id)}>not interested</button>
        </footer>
      </article>
    ) : (
      <> </>
    )
  )
}

export default Tour