import React from 'react';

const ExpenseItem = () => {
    return (
        <tr>
            <td>{props.description}</td>
            <td>{props.paymentType}</td>
            <td>{props.date}</td>
            <td>${props.amount}</td>
        </tr>
    )
}