import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseTable = () => {
    const expenses = [
        { id: 123456, description: 'groceries', paymentType: 'card', date: '5/10/22', amount: 50 },
        { id: 123456, description: 'groceries', paymentType: 'card', date: '5/10/22', amount: 50 },
        { id: 123456, description: 'groceries', paymentType: 'card', date: '5/10/22', amount: 50 },
        { id: 123456, description: 'groceries', paymentType: 'card', date: '5/10/22', amount: 50 }
    ]

    return (
        <div className='container mt-4'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map(((expense)=>(
                            <ExpenseItem 
                            id={expense.id} 
                            description={expense.description} 
                            paymentType={expense.paymentType} 
                            date={expense.date}
                            amount={expense.amount} />
                        )))}
                    </tbody>
                </table>
            </div>
    )
}

export default ExpenseTable;