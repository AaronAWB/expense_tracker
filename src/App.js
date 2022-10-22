import './index.css';
import Form from './Form';
import Table from './Table.js';

function App() {
  return (
    <div className='app'>
      <h1 className='heading'>Expense Tracker</h1>
      <Form />
      <Table
        type=''
        name=''
        date=''
        amount=''
      />
    </div>
  );
}

export default App;
