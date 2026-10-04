import {
    DialogForm,
    Numeric,
    Select,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Text
        budget
        required
    />
    <Title />
    <Select
        budgetLineType
        options={[
            'revenue',
            'expense',
            'capital',
        ]}
        placeholder='lineType'
        required
    />
    <Numeric
        allocatedAmount
        required
    />
    <Numeric committedAmount />
    <Numeric actualAmount />
</>

export default <DialogForm inputs={inputs} />
