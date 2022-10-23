import './index.css';
import Form from './Form';
import TableHeader from './Table.js';

function App() {
  return (
    <div>
      <div className='container'>
        <h1 className='mt-3'>Expense Tracker</h1>
      </div>
      <div className='app'>
        <Form />
        <TableHeader />
      </div>
    </div>
  );
}

export default App;
