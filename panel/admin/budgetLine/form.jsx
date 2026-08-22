import {
    DialogForm,
    Numeric,
    Select,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Text
        placeholder='budgetingBudget'
        property='budget'
        required
    />
    <Title />
    <Select
        options={[
            'revenue',
            'expense',
            'capital',
        ]}
        placeholder='budgetingLineType'
        property='budgetLineType'
        required
    />
    <Numeric
        placeholder='budgetingAllocatedAmount'
        property='allocatedAmount'
        required
    />
    <Numeric
        placeholder='budgetingCommittedAmount'
        property='committedAmount'
    />
    <Numeric
        placeholder='budgetingActualAmount'
        property='actualAmount'
    />
</>

export default <DialogForm inputs={inputs} />
