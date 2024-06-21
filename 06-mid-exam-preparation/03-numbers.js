function numbers(str) {
    let numsArr = str.split(' ').map(Number);

    let numsSum = 0;

    for (const num of numsArr) {
        numsSum += num;
    }

    const numsAvg = numsSum / numsArr.length;

    const filteredNums = numsArr.filter(num => num > numsAvg);

    if (filteredNums.length === 0) {
        console.log('No');
    } else {
        const sortedNums = filteredNums.sort((a, b) => b - a);
        const top5Nums = sortedNums.slice(0, 5);
        console.log(top5Nums.join(' '));
    }
}

numbers('10 20 30 40 50');
// OUTPUT
// 50 40


// numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
// OUTPUT
// 60 60 51 50 50


// numbers('1');
// OUTPUT
// No


// numbers('-1 -2 -3 -4 -5 -6');
// OUTPUT
// -1 -2 -3