import React from 'react';
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = (props) => {
    return (
        <tr key={props.id}>
            <td>{props.description}</td>
            <td>{props.paymentType}</td>
            <td>{props.date}</td>
            <td>${props.amount}</td>
            <td><TiDelete size='1.5em'></TiDelete></td>
        </tr>
    )
}

export default ExpenseItem;