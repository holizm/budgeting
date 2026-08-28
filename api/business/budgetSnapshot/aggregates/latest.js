[
    { $match: { budget } },
    { $sort: { snapshotDate: -1 } },
    { $limit: 1 },
]
