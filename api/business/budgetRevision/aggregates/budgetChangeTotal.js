[
    { $match: { budget } },
    {
        $group: {
            _id: null,
            total: {
                $sum: {
                    $subtract: [
                        '$revisedAmount',
                        '$previousAmount',
                    ],
                },
            },
        },
    },
]
