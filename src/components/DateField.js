import React from 'react';

const dateField = () => {
    return (
        <div className='mb-3'>
            <input type='date' id='date' required></input>
            <label for='date'>Date:</label>
        </div>
    )
}

export default dateField;