import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem('items'));
  } catch {
    return [];
  }
}

function App() {
  const [text, setText] = useState('');
  const [copy, setCopy] = useState('');
  const [items, setItems] = useState(getLocalStorage);
  const [alert, setAlert] = useState({});
  const [modeIsEdit, setModeIsEdit] = useState(false);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const clearAlert = () => setAlert({});

  const recordInput = (event) => setText(event.target.value);

  const changeMode = (index) => {
    setModeIsEdit(true);
    setCopy(items[index]);
    setText(items[index]);
  }

  const editItem = () => {
    setItems(prevItems => (
      prevItems.map(item => item === copy ? text : item)
    ));
    setModeIsEdit(false);
    setAlert({type: 'success', msg: 'value changed'});
  }

  const removeItem = (trash) => {
    setItems(prevItems => (
      prevItems.filter(item => item !== trash)
    ));
    setAlert({type: 'danger', msg: 'item removed'});
  }

  const addItem = () => {
    setItems(prevItems => [...prevItems, text]);
    setAlert({type: 'success', msg: 'item added to the list'});
  }

  const clearItems = () => {
    setItems([]);
    setAlert({type: 'danger', msg: 'empty list'});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text) {
      modeIsEdit ? editItem() : addItem();
      setText('');
    } else {
      setAlert({type: 'danger', msg: 'please enter value'});
    }
  }
  
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {Object.keys(alert).length > 0 && <Alert alert={alert} clearAlert={clearAlert}/>}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            className='grocery'
            placeholder='e.g. eggs'
            onChange={recordInput}
            value={text}
          />
          <button className='submit-btn'>{modeIsEdit ? 'edit' : 'submit'}</button>
        </div>
      </form>
      {
        items.length > 0 &&
          <div className='grocery-container'>
            <List items={items} changeMode={changeMode} removeItem={removeItem}/>
            <button className='clear-btn' onClick={clearItems}>
              clear items
            </button>
          </div>
      }
    </section>
  );
}

export default App;
