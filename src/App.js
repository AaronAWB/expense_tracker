import { useEffect, useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';

function App() {

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('expenses'));
    if (storedData != null) {
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
     setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => { 
        return expense.id !== expenseId; 
      })
    });
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
