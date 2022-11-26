import { useEffect, useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';

function App() {

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('expenses'));
    if (storedData != '') {
      setExpenses(storedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
    }, [expenses])

  const addExpense = (formData) => {
    setExpenses([...expenses, formData]);
  }

  const handleDelete = (expenseId) => {
    const currentExpenses = [...expenses];
    const index = expenses.findIndex((expense) => expense.id === expenseId);
    currentExpenses.splice(index, 1);
    setExpenses(currentExpenses);
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
