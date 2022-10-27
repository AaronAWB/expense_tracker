import React from 'react';
import ExpenseItem from './ExpenseItem';


const ExpenseTable = ({expenses, handleDelete}) => {
    
    return (
        <div className='container mt-4'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Location</th>
                            <th>Delete</th>
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