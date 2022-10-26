import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { nanoid } from 'nanoid';

const ExpenseForm = ({addExpense}) => {

    const [formData, setFormData] = useState({
        id: nanoid(),
        description: '',
        type: '',
        date: '',
        amount: '',
    })

    const handleFormInput = (event) => {
        event.preventDefault();
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addExpense(formData);
        setFormData({ id: '', description: '', type: '', date: '', amount: ''})

    }

    return (
        <div className='container'>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label for="description" className="form-label">Description</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="description"
                        name="description"
                        placeholder="Description" 
                        required
                        value={formData.description}
                        onChange={handleFormInput}
                    ></input>
                </div>

                <select 
                    className="form-select" 
                    aria-label="Default select example" 
                    name="type"
                    required
                    value={formData.type}
                    onChange={handleFormInput}
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
                        value={formData.date}
                        onChange={handleFormInput}
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
                        value={formData.amount}
                        onChange={handleFormInput}
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