import Button from 'react-bootstrap/Button';
import FloatingForm from 'react-bootstrap/FormFloating';
import { useState } from 'react';

const Form = () => {
    return (
        <div className='fields-container'>
            <form className='fields'>

                <div className='row'>

                    <div className='col-6'>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Description" required></input>
                            <label for="floatingInput">Description</label>
                        </div>
                    </div>

                    <div className='col-6'>
                        <div class="form-floating">
                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                <option selected></option>
                                <option value="card">Card</option>
                                <option value="cash">Cash</option>
                                <option value="cryptocurrency">Cryptocurrency</option>
                                <option value="other">Other</option>
                            </select>
                            <label for="floatingSelect">Payment Type</label>
                        </div>
                    </div>
                
                </div>

                <div className='row'>
                    <div className='col-6'>
                        <input type='date' id='date' required></input>
                        <label for='date'>Date:</label>
                    </div>

                    <div className='col-6'>
                        <div class="form-floating mb-3">
                            <input type="number" class="form-control" id="floatingInput" placeholder="Amount" required></input>
                            <label for="floatingInput">Amount</label>
                        </div>
                    </div>
                </div>

            </form>
            <div className='submit-button-container'>
                <button type="submit" className="btn btn-primary">Submit Expense</button>
            </div>
        </div>
    );
}
 
export default Form;
