import React from 'react';

const ExpenseItem = (props) => {
    return (
        <tr key={props.id}>
            <td>{props.description}</td>
            <td>{props.type}</td>
            <td>{props.date}</td>
            <td>${props.amount}</td>
            <td>
                <span>
                    <button type='button' className='btn btn-outline-danger btn-sm' onClick={() => props.handleDelete(props.id)}>Delete</button>
                </span>
            </td>
        </tr>
    )
}

export default ExpenseItem;