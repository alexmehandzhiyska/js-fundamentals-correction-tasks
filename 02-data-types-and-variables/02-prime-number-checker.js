function solve(num) {
    let isPrime = false;
    
    for (let divisor = 1; divisor <= num; divisor++) {
        if (num % divisor === 0) {
            isPrime = true;
        }
    }

    console.log(isPrime);
}
