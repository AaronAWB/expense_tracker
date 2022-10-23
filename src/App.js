import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';

function App() {
  return (
    <div className='container'>
      <h1 className='mt-3'>Expense Tracker</h1>
      <ExpenseForm />
      <ExpenseTable />
    </div>
  );
}

export default App;
