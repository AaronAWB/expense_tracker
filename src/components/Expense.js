const Expense = (props) => {
    return (  
    <tr>
      <td> {props.type} </td>
      <td> {props.name} </td>
      <td> {props.date} </td>
      <td> {props.amount} </td>
    </tr>
    );
}
 
export default Expense;