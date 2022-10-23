import React from 'react';

const AmountField = () => {
    return (
        <div className="mb-3">
            <label for="amount" class="form-label">Amount</label>
            <input type="number" class="form-control" id="amount" placeholder="Amount"></input>
        </div>
    )
}

export default AmountField;