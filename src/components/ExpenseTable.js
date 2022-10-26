import React from 'react';
import ExpenseItem from './ExpenseItem';


const ExpenseTable = ({expenses}) => {
    
    return (
        <div className='container mt-4'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Payment Type</th>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map(((expense)=>(
                            <ExpenseItem 
                            id={expense.id} 
                            description={expense.description} 
                            paymentType={expense.type} 
                            date={expense.date}
                            amount={expense.amount} />
                        )))}
                    </tbody>
                </table>
            </div>
    )
}

export default ExpenseTable;