import React, { useState } from 'react';
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
        <div className='container-fluid border rounded'>

            <form className='caption-top' onSubmit={handleSubmit}>
            <caption className='form-caption'>Add New Expense</caption>

                <div className='row'>

                    <div className='mb-3 mt-3 col'>
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

                    <div className='mb-3 col'>
                        <label for="description" className="form-label">Description</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="description"
                            name="description"
                            placeholder="Enter description..." 
                            required
                            value={formData.description}
                            onChange={handleFormInput}
                        ></input>
                    </div>

                </div>

                <div className='row'>

                    <div className="mb-3 col">
                        <label for="amount" class="form-label">Amount</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="amount" 
                            name="amount"
                            placeholder="Enter amount..." 
                            required
                            value={formData.amount}
                            onChange={handleFormInput}
                        ></input>
                    </div>

                    <div className="mb-3 col">
                        <label for="location" className="form-label">Location</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="location"
                            name="location"
                            placeholder="Enter location..." 
                            required
                            value={formData.location}
                            onChange={handleFormInput}
                        ></input>
                    </div>

                </div>

                <div className='text-center mb-3'>
                    <button type='submit' className='btn btn-primary'>Add Expense</button>
                </div>

            </form>

        </div>
    )
}

export default ExpenseForm;