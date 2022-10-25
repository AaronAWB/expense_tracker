import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';

const ExpenseForm = () => {

    const [formInputData, setFormInputData] = useState({
        description: '',
        paymentType: '',
        date: '',
        amount: '',
    })

    const handleFormInputData = (event) => {
        event.preventDefault();
        
        const inputName = event.target.getAttribute('name');
        const inputValue = event.target.value;

        const newInputData = {...formInputData};
        newInputData[inputName] = inputValue;

        setFormInputData(newInputData);
     
    }

    const handleSubmit = () => {
        event.preventDefault();
    }

    return (
        <div className='container'>

            <form>

                <div className="mb-3">
                    <label for="description" className="form-label">Description</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="description"
                        name="description"
                        placeholder="Description" 
                        required
                        onChange={handleFormInputData}
                    ></input>
                </div>

                <select 
                    className="form-select" 
                    aria-label="Default select example" 
                    name="paymentType"
                    required
                    onChange={handleFormInputData}
                    >
                    <option selected>Select Payment Type</option>
                    <option value="Card">Card</option>
                    <option value="Cash">Cash</option>
                    <option value="Cryptocurrency">CryptoCurrency</option>
                    <option value="Other">Other</option>
                </select>

                <div className='mb-3'>
                    <label for='date'>Date:</label>
                    <input 
                        type='date' 
                        id='date' 
                        name='date'
                        required
                        onChange={handleFormInputData}
                    ></input>
                </div>

                <div className="mb-3">
                    <label for="amount" class="form-label">Amount</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="amount" 
                        name="amount"
                        placeholder="Amount" 
                        required
                        onChange={handleFormInputData}
                    ></input>
                </div>

                <div className='text-center'>
                    <button type='submit' className='btn btn-primary'>Submit Expense</button>
                </div>

            </form>

        </div>
    )
}

export default ExpenseForm;