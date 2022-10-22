// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Form = () => {
    return (
        <div className='fields-container'>
            <form className='fields'>
            
                <label for='type'>Type:</label>
                <select name='type' id='type' required>
                    <option value='card'>card</option>
                    <option value='cash'>cash</option>
                    <option value='cryptocurrency'>cryptocurrency</option>
                    <option value='other'>other</option>
                </select>

                <label for='name'>Name:</label>
                <input type='name' id='name' required></input>

                <label for='date'>Date:</label>
                <input type='date' id='date' required></input>

                <label for='number'>Amount:</label>
                <input type='number' id='amount' required></input>

            </form>
            <div className='submit-button-container'>
                <button className='submit-button' variant='primary'>Add a New Expense</button>{' '}
            </div>
        </div>
    );
}
 
export default Form;
