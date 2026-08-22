import {
    List,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>budgetingBudgetLine</th>
    <th>budgetingAllocatedAmount</th>
    <th>budgetingCommittedAmount</th>
    <th>budgetingActualAmount</th>
    <th>budgetingVariance</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.allocatedAmount}</td>
    <td>{item.committedAmount}</td>
    <td>{item.actualAmount}</td>
    <td>{item.allocatedAmount - item.actualAmount}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
