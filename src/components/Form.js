import React, { useState } from 'react'
import Gapi from './Gapi'
import Calendar from 'react-calendar';


function Form() {
    const [value, onChange] = useState(new Date());
  return (
    <div className='formDiv'>
        <form>
            <label>Meeting Room
                <input type="text" />
            </label>
            <label>Enter your Name
                <input type="text" />
            </label>
            <label>Meeting Description
                <input type="text" />
            </label>
            
            <Calendar onChange={onChange} value={value} />

            <Gapi />
        </form>
    </div>
  )
}

export default Form