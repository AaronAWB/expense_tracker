import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseTable = ({expenses, handleDelete}) => {
    
    return (
        <div className='container mt-4 border rounded'>
                <table className='table caption-top'>
                <caption>Expense List</caption>
                    <thead className='table-light text-center'>
                        <tr classname='row'>
                            <th width='col'>Date</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Amount</th>
                            <th scope='col'>Location</th>
                            <th scope='col'>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {expenses.map(((expense)=>(
                            <ExpenseItem 
                            id={expense.id}
                            date={expense.date}
                            description={expense.description}         
                            amount={expense.amount} 
                            location={expense.location}
                            handleDelete={handleDelete}
                            />
                        )))}
                    </tbody>
                </table>
            </div>
    )
}

export default ExpenseTable;