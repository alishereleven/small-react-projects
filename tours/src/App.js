import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setTours(data)
      })
  }, [])

  return (
    <main>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
      </div>
      <Tours tours={tours}/>
    </main>
  )
}

export default App