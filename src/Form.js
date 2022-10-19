const Form = () => {
    return (
        <>
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
                <input type='amount' id='amount' required></input>

            </form>
            <button>Add a New Expense</button>
        </>
    );
}
 
export default Form;
