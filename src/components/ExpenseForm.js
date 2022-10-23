import React, {useState} from 'react';

const ExpenseForm = () => {

    const [description, setDescription] = useState('');
    const [paymentTpe, setPaymentType] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');

    return (
        <div className='container'>

            <form>

                <div className="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="description" 
                        placeholder="Description" 
                        required>
                    </input>
                </div>

                <select class="form-select" aria-label="Default select example" required>
                    <option selected>Select Payment Type</option>
                    <option value="Card">Card</option>
                    <option value="Cash">Cash</option>
                    <option value="Cryptocurrency">CryptoCurrency</option>
                    <option value="Other">Other</option>
                </select>

                <div className='mb-3'>
                    <label for='date'>Date:</label>
                    <input type='date' id='date' required></input>
                </div>

                <div className="mb-3">
                    <label for="amount" class="form-label">Amount</label>
                    <input type="number" class="form-control" id="amount" placeholder="Amount" required></input>
                </div>

            </form>

            <button type='submit' className='btn btn-primary'>Submit</button>

        </div>
    )
}

export default ExpenseForm;