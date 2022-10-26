import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';

function App() {

  const [expenses, updateExpenses] = useState([]);

  const addExpense = (formData) => {
    updateExpenses([...expenses, formData])
  }

  return (
    <div className='container'>
      <h1 className='mt-3 text-center'>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseTable expenses={expenses}/>
    </div>
  );
}

export default App;
