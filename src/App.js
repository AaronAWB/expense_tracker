import './index.css';
import DescriptionField from './components/DescriptionField';
import PaymentTypeField from './components/PaymentTypeField';
import DateField from './components/DateField';
import AmountField from './components/AmountField'

function App() {
  return (
    <div className='container'>
      <h1 className='mt-3'>Expense Tracker</h1>
      <div className='row mt-3'>
        <div className='col-sm'>
          <DescriptionField />
        </div>
        <div className='col-sm'>
          <PaymentTypeField />
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-sm'>
          <DateField />
        </div>
        <div className='col-sm'>
          <AmountField />
        </div>
      </div>
    </div>
  );
}

export default App;
