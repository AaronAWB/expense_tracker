import React from 'react';

const ExpenseItem = (props) => {
    return (
        <tr key={props.id}>
            <td>{props.date}</td>
            <td>{props.description}</td>
            <td>${props.amount}</td>
            <td>{props.location}</td>
            <td>
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