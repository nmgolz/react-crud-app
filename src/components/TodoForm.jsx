import React, { useState } from 'react'

function TodoForm(props) {

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [id, setId] = useState();

    const handleNameInput = (e) => {
        setName(e.target.value);
    }
    const handleDateInput = (e) => {
        setDate(e.target.value);
        setId(Math.floor(Math.random()* 999))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.addToDo({name, date, id})
        setDate('');
        setName('');

    }

  return (
    <div className=''>
        <form onSubmit={onSubmit}>
            <p className='mb-1 mt-2 d-flex justify-content-start'>Add Item to ToDo List</p>
            <input 
                className='form-control' 
                type='text' 
                placeholder="Add ToDo Item"
                onChange={handleNameInput}
                value={name}></input>
            <p className='mb-1 mt-2 d-flex justify-content-start'>Due Date</p>
            <input 
                className='form-control' 
                type='text' 
                placeholder="Add ToDo Date"
                onChange={handleDateInput}
                value={date}></input>
            <button 
                className='btn btn-info  mx-0 mt-2 d-flex justify-content-start' 
                type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default TodoForm