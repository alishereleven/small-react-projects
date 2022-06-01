import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [load, setLoad] = useState(false)
  const [tours, setTours] = useState([])

  function deleteOnClick(id) {
    setTours(prevTours => prevTours.filter(tour => tour.id !== id))
  }

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setTours(data)
      })
    
    setTimeout(() => setLoad(true), 1000)
  }, [load])

  return (
    load ? 
    (
      tours.length ?
      (
        <main>
          <div className='title'>
            <h2>our tours</h2>
            <div className='underline'></div>
          </div>
          <Tours tours={tours} deleteOnClick={deleteOnClick}/>
        </main>
      ) : (
        <main>
          <div className='title'>
            <h2>no tours left</h2>
            <button className='btn' onClick={() => setLoad(false)}>refresh</button>
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