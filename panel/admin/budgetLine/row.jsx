export default item => <>
    <td>{item.title}</td>
    <td>{item.allocatedAmount}</td>
    <td>{item.committedAmount}</td>
    <td>{item.actualAmount}</td>
    <td>{item.allocatedAmount - item.actualAmount}</td>
</>
