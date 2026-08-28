[
    { $match: { budget } },
    {
        $group: {
            _id: null,
            total: { $sum: '$amount' },
        },
    },
]
