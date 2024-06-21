function solve(arr) {
    const studentCount = Number(arr.shift());
    const totalLecureCount = Number(arr.shift());
    const additionalBonus = Number(arr.shift());

    let maxBonus = 0;
    let maxAttendaceCount = 0;

    for (let curStudent = 1; curStudent <= studentCount; curStudent++) {
        const curAttendanceCount = Number(arr.shift());

        const totalBonus = curAttendanceCount / totalLecureCount * (5 + additionalBonus);

        if (totalBonus > maxBonus) {
            maxBonus = totalBonus;
            maxAttendaceCount = curAttendanceCount;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendaceCount} lectures.`);
}

// solve([
//     '5', '25', '30',
//     '12', '19', '24',
//     '16', '20'
// ]
// );

// OUTPUT

// Max Bonus: 34.
// The student has attended 24 lectures.

solve([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]
);

//   OUTPUT

// Max Bonus: 18.
// The student has attended 28 lectures.

