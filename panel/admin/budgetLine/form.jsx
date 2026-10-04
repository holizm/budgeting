import {
    DialogForm,
    Numeric,
    Select,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Text
        placeholder='budget'
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
        placeholder='lineType'
        property='budgetLineType'
        required
    />
    <Numeric
        placeholder='allocatedAmount'
        property='allocatedAmount'
        required
    />
    <Numeric
        placeholder='committedAmount'
        property='committedAmount'
    />
    <Numeric
        placeholder='actualAmount'
        property='actualAmount'
    />
</>

export default <DialogForm inputs={inputs} />
