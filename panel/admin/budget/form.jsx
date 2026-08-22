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
        placeholder='budgetingCode'
        property='code'
        required
    />
    <Text
        placeholder='budgetingFiscalPeriod'
        property='fiscalPeriod'
        required
    />
    <Text
        placeholder='budgetingCurrency'
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
        placeholder='budgetingStatus'
        property='budgetStatus'
        required
    />
    <LongText
        placeholder='budgetingDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
