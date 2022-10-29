import React from 'react';

const ExpenseItem = (props) => {
    return (
        <tr key={props.id}>
            <td width='20%'>{props.date}</td>
            <td width='20%'>{props.description}</td>
            <td width='20%'>${props.amount}</td>
            <td width='20%'>{props.location}</td>
            <td width='20%'>
                 <button 
                    type='button' 
                    className='btn btn-outline-danger btn-sm' 
                    onClick={() => props.handleDelete(props.id)}>
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default ExpenseItem;