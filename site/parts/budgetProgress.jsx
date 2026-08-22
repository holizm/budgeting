export default ({ budgetLine }) => <dl class='budgetProgress'>
    <dt class='title'>{budgetLine.title}</dt>
    <dd class='allocatedAmount'>{budgetLine.allocatedAmount}</dd>
    <dd class='actualAmount'>{budgetLine.actualAmount}</dd>
    <dd class='variance'>{budgetLine.allocatedAmount - budgetLine.actualAmount}</dd>
</dl>
