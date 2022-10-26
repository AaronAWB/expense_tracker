import React from 'react';
import ExpenseItem from './ExpenseItem';


const ExpenseTable = ({expenses, handleDelete}) => {
    
    return (
        <div className='container mt-4'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Payment Type</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map(((expense)=>(
                            <ExpenseItem 
                            id={expense.id} 
                            description={expense.description} 
                            type={expense.type} 
                            date={expense.date}
                            amount={expense.amount} 
                            handleDelete={handleDelete}
                            />
                        )))}
                    </tbody>
                </table>
            </div>
    )
}

export default ExpenseTable;