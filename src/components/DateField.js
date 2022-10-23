import React from 'react';

const DateField = () => {
    return (
        <div className='mb-3'>
            <label for='date'>Date:</label>
            <input type='date' id='date' required></input>
        </div>
    )
}

export default DateField;