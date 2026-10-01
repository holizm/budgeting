export default item => <>
    <td>{item.title}</td>
    <td>{item.code}</td>
    <td>{item.fiscalPeriod?.title}</td>
    <td>{item.budgetStatus}</td>
</>
