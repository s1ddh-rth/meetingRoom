import React, { useState } from 'react'
import Gapi from './Gapi'
import Calendar from 'react-calendar';


function Form() {
    function handleChange(evt) {
        setAgenda(evt.target.value);
    }
    function handleDesc(evt) {
        
        setDesc(evt.target.value);
    }
    const [value, onChange] = useState(new Date());
    const [agenda, setAgenda] = useState();
    const [desc, setDesc] = useState();
  return (
    <div className='formDiv'>
        <form>
            <label>Meeting Room
                <input type="text" value={agenda} onChange={handleChange} />
            </label>
            <label>Enter your Name
                <input type="text" />
            </label>
            <label>Meeting Description
                <input type="text" value={desc} onChange={handleDesc} />
            </label>
            
            <Calendar onChange={onChange} value={value} />

            <Gapi agenda={agenda} desc={desc} dateTime={value} />
            
        </form>
    </div>
  )
}

export default Form