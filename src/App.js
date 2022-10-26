import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';

function App() {

  const [expenses, updateExpenses] = useState([]);

  const addExpense = (formData) => {
    updateExpenses([...expenses, formData])
  }

  const handleDelete = (expenseId) => {
    const newExpenses = [...expenses];
    const index = expenses.findIndex((expense) => expense.id === expenseId);
    newExpenses.splice(index, 1);
    updateExpenses(newExpenses);
  }

  return (
    <div className='container'>
      <h1 className='mt-3 text-center'>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseTable 
        expenses={expenses}
        handleDelete={handleDelete}
        />
    </div>
  );
}

export default App;
