import React from 'react';

const ExpenseForm = () => {
    return (
        <form>

            <div className="mb-3">
                <label for="description" class="form-label">Description</label>
                <input type="text" class="form-control" id="description" placeholder="Description"></input>
            </div>

            <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>

            <div className='mb-3'>
                <label for='date'>Date:</label>
                <input type='date' id='date' required></input>
            </div>

            <div className="mb-3">
                <label for="amount" class="form-label">Amount</label>
                <input type="number" class="form-control" id="amount" placeholder="Amount"></input>
            </div>

        </form>
    )
}

export default ExpenseForm;