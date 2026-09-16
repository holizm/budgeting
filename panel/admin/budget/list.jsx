import {
    List,
    Text,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>budgetingBudget</th>
    <th>budgetingCode</th>
    <th>budgetingFiscalPeriod</th>
    <th>stateMachinesState</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.code}</td>
    <td>{item.fiscalPeriod?.title}</td>
    <td>{item.budgetStatus}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
