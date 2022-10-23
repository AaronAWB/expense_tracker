import React, {useState} from 'react';

const ExpenseForm = () => {

    const [description, setDescription] = useState('');
    const [paymentType, setPaymentType] = useState('');
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
                        required
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    ></input>
                </div>

                <select 
                    class="form-select" 
                    aria-label="Default select example" 
                    required
                    value={paymentType}
                    onChange={(event) => setPaymentType(event.target.value)}
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
                        required
                        value={date}
                        onChange={(event) => setDate(event.target.value)}
                    ></input>
                </div>

                <div className="mb-3">
                    <label for="amount" class="form-label">Amount</label>
                    <input 
                        type="number" 
                        class="form-control" 
                        id="amount" placeholder="Amount" 
                        required
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                    ></input>
                </div>

            </form>

            <button type='submit' className='btn btn-primary'>Submit</button>

        </div>
    )
}

export default ExpenseForm;