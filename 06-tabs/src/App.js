import React, { useState, useEffect } from 'react'
import Info from './Info'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loaded, setLoaded] = useState(false)
  const [value, setValue] = useState(0)
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setJobs(data)
        setLoaded(true)
      })
  }, [])
  
  return (
    loaded ? (
      <main>
        <section className='section'>
          <header className='title'>
            <h2>Experience</h2>
            <div className='underline'></div>
          </header>
          <div className='jobs-center'>
            <div className='btn-container'>
              {jobs.map(({ id, company }, index) => (
                <button
                  key={id}
                  className={
                    `job-btn ${index === value && 'active-btn'}`
                  }
                  onClick={
                    () => setValue(index)
                  }
                >
                  {company}
                </button>
              ))}
            </div>
            <Info job={jobs[value]}/>
          </div>
          <button className='btn'>more info</button>
        </section>
      </main>
    ) : (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  )
}

export default App