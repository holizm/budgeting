[
    { $match: { budget } },
    {
        $group: {
            _id: null,
            actualAmount: { $sum: '$actualAmount' },
            allocatedAmount: { $sum: '$allocatedAmount' },
            committedAmount: { $sum: '$committedAmount' },
        },
    },
]
