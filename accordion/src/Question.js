import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ question, answer }) => {
  const [hidden, setHidden] = useState(true)

  function handleClick() {
    setHidden(prevHidden => !prevHidden)
  }

  return <div className='question'>
    <header>
      <h4>{question}</h4>
      <button className='btn' onClick={() => handleClick()}>
        {
          hidden ? <AiOutlinePlus /> : <AiOutlineMinus />
        }
      </button>
    </header>
    {
      !hidden && <p>{answer}</p>
    }
  </div>
}

export default Question