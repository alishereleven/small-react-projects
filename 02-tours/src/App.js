import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tour from './Tour'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loaded, setLoaded] = useState(false)
  const [tours, setTours] = useState([])

  function deleteOnClick(id) {
    setTours(prevTours => prevTours.filter(tour => tour.id !== id))
  }

  useEffect(() => {
    try {
      fetch(url)
      .then(res => res.json())
      .then(data => {
        setTours(data)
        setLoaded(true)
      })
    } catch (error) {
      console.log(error)
    }
  }, [loaded])

  return (
    loaded ? 
    (
      tours.length ?
      (
        <main>
          <div className='title'>
            <h2>our tours</h2>
            <div className='underline'></div>
          </div>
          {
            tours.map(tour => (
              <Tour tour={tour} deleteOnClick={deleteOnClick} key={tour.id}/>
            ))
          }
        </main>
      ) : (
        <main>
          <div className='title'>
            <h2>no tours left</h2>
            <button className='btn' onClick={() => setLoaded(false)}>refresh</button>
          </div>
        </main>
      )
    ) : (
      <main>
        <Loading />
      </main>
    )
  )
}

export default App