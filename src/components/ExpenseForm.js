import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { nanoid } from 'nanoid';

const ExpenseForm = ({addExpense}) => {

    const [formData, setFormData] = useState({
        id: '',
        date: '',
        description: '',
        amount: '',
        location: ''
    })

    const handleFormInput = (event) => {
        event.preventDefault();
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setUniqueId();
        addExpense(formData);
        setFormData({ id: '', date: '', description: '', amount: '', location: ''})
    }

    const setUniqueId = () => {
        let uniqueId = nanoid();
        setFormData({...formData, id: uniqueId});
    }

    return (
        <div className='container border rounded'>

            <form onSubmit={handleSubmit}>

            <div className='mb-3 mt-3'>
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

                <div className="mb-3">
                    <label for="location" className="form-label">Location</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="location"
                        name="location"
                        placeholder="Location" 
                        required
                        value={formData.location}
                        onChange={handleFormInput}
                    ></input>
                </div>

                <div className='text-center mb-3'>
                    <button type='submit' className='btn btn-primary'>Submit Expense</button>
                </div>

            </form>

        </div>
    )
}

export default ExpenseForm;