import React from 'react';

const ExpenseItem = (props) => {
    return (
        <tr>
            <td>{props.description}</td>
            <td>{props.paymentType}</td>
            <td>{props.date}</td>
            <td>${props.amount}</td>
        </tr>
    )
}

export default ExpenseItem;