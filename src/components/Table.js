import Table from 'react-bootstrap/Table'

const TableHeader = () => {
    return (  
        <div className='container mt-4'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
}
 
export default TableHeader;