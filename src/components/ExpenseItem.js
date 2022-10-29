import React from 'react';

const ExpenseItem = ({ id, date, description, amount, location, handleDelete }) => {
    return (
        <tr key={id}>
            <td width='20%'>{date}</td>
            <td width='20%'>{description}</td>
            <td width='20%'>${amount}</td>
            <td width='20%'>{location}</td>
            <td width='20%'>
                 <button 
                    type='button' 
                    className='btn btn-outline-danger btn-sm' 
                    onClick={() => handleDelete(id)}>
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default ExpenseItem;