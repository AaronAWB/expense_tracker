import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const ExpenseForm = ({addExpense}) => {

    const [formData, setFormData] = useState({
        id: nanoid(),
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
        addExpense(formData);
        setFormData({ id: nanoid(), date: '', description: '', amount: '', location: ''})
    }

    return (
        <div className='container-fluid border rounded'>

            <form className='caption-top' onSubmit={handleSubmit}>
            <caption className='form-caption'>Add New Expense</caption>

                <div className='row form-group'>

                    <div className='mb-3 mt-3 col'>
                        <label htmlFor='date' className='mb-2'>Date</label>
                        <input 
                            type='date' 
                            id='date' 
                            name='date'
                            className='form-control'
                            required
                            value={formData.date}
                            onChange={handleFormInput}
                        ></input>
                    </div>

                    <div className='mb-3 mt-3 col'>
                        <label htmlFor="description" className="form-label">Description</label>
                        <input 
                            type='text' 
                            className='form-control'
                            id='description'
                            name='description'
                            placeholder="What did you spend on?" 
                            required
                            value={formData.description}
                            onChange={handleFormInput}
                        ></input>
                    </div>

                </div>

                <div className='row'>

                    <div className='mb-3 col'>
                        <label htmlFor='amount' class='form-label'>Amount</label>
                        <input 
                            type='number' 
                            className='form-control' 
                            id='amount' 
                            name='amount'
                            placeholder="How much did you spend?" 
                            required
                            value={formData.amount}
                            onChange={handleFormInput}
                        ></input>
                    </div>

                    <div className='mb-3 col'>
                        <label htmlFor='location' className='form-label'>Location</label>
                        <input 
                            type='text' 
                            className='form-control'
                            id='location'
                            name='location'
                            placeholder="Where did you spend?" 
                            required
                            value={formData.location}
                            onChange={handleFormInput}
                        ></input>
                    </div>

                </div>

                <div className='text-center mb-4 mt-2'>
                    <button type='submit' className='btn btn-primary'>Add Expense</button>
                </div>

            </form>

        </div>
    )
}

export default ExpenseForm;