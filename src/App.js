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
    const index = expenses.findIndex((expense) => expenses.id === expenseId);
    newExpenses.splice(index, 1);
    updateExpenses(newExpenses);
  }

  return (
    <div className='container'>
      <h1 className='mt-4 mb-4 text-center'>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseTable 
        expenses={expenses}
        handleDelete={handleDelete}
        />
    </div>
  );
}

export default App;
