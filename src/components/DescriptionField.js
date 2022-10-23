import React from 'react';

const descriptionField = () => {
    return (
        <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Description</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Description"></input>
        </div>
    )
}

export default descriptionField;