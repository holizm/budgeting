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
        placeholder='code'
        property='code'
        required
    />
    <Text
        placeholder='fiscalPeriod'
        property='fiscalPeriod'
        required
    />
    <Text
        placeholder='currency'
        property='currency'
        required
    />
    <Select
        options={[
            'draft',
            'submitted',
            'approved',
            'active',
            'closed',
            'cancelled',
        ]}
        placeholder='state'
        property='budgetStatus'
        required
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
