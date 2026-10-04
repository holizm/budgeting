import {
    DialogForm,
    LongText,
    Select,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        code
        required
    />
    <Text
        fiscalPeriod
        required
    />
    <Text
        currency
        required
    />
    <Select
        budgetStatus
        options={[
            'draft',
            'submitted',
            'approved',
            'active',
            'closed',
            'cancelled',
        ]}
        placeholder='state'
        required
    />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
