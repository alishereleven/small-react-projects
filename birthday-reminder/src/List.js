import React from 'react';

const List = (props) => {
  return (
    <>
      {props.people.map(person => (
        <div className='person' key={person.id}>
          <img src={person.image} alt={person.name} />
          <div>
            <h4>{person.name}</h4>
            <p>{person.age} years</p>
          </div>
        </div>
      ))}
    </>
  )
};

export default List;
