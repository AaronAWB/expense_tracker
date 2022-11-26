import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseTable = ({expenses, handleDelete}) => {

    const renderTableRow = () => {
        
        if (expenses.length === 0) {
        return(
            <tr>
                <td colSpan={5}>No expenses added yet...</td>
            </tr>
        )}

        return expenses.map((expense)=>(
                <ExpenseItem 
                id={expense.id}
                date={expense.date}
                description={expense.description}         
                amount={expense.amount} 
                location={expense.location}
                handleDelete={handleDelete}
                />
        ));    
    }
    
    return (
        <div className='container mt-4 border rounded expense-table shadow p-3 mb-5'>
                <table className='table caption-top'>
                <caption className='table-caption'>Expense List</caption>
                    <thead className='table-light text-center'>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Location</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {renderTableRow()}
                    </tbody>
                </table>
            </div>
    )
}

export default ExpenseTable;