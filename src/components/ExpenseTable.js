import React from 'react';
import ExpenseItem from './ExpenseItem';


const ExpenseTable = ({expenses, handleDelete}) => {
    
    return (
        <div className='container mt-4 table-bordered'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Date</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Amount</th>
                            <th scope='col'>Location</th>
                            <th scope='col'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
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