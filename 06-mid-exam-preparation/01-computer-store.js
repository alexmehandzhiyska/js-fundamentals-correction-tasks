function computerStore(arr) {
    let totalPriceNoTax = 0;
    let command = arr.shift();

    while (command !== 'special' && command !== 'regular') {
        const partPriceNoTax = Number(command);

        if (partPriceNoTax <= 0) {
            console.log("Invalid price!");
            command = arr.shift();
            continue;
        }

        totalPriceNoTax += partPriceNoTax;

        command = arr.shift();
    }

    // return - stops the entire function
    // break - stops the entire loop
    // continue - stops the current iteration -> continues with the next one

    const totalTax = 0.2 * totalPriceNoTax;
    let totalPriceWithTax = totalPriceNoTax + totalTax;

    if (command === 'special') {
        totalPriceWithTax *= 0.9;
    }

    if (totalPriceWithTax === 0) {
        console.log("Invalid order!");
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${totalPriceNoTax.toFixed(2)}$`);
        console.log(`Taxes: ${totalTax.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${totalPriceWithTax.toFixed(2)}$`);
    }
}

// computerStore([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'
// ]);

// OUTPUT

// Congratulations you've just bought a new computer!
// Price without taxes: 1737.36$
// Taxes: 347.47$
// -----------
//     Total price: 1876.35$



computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30',
    'regular'
]);

// OUTPUT

// Invalid price!
// Invalid price!
// Congratulations you've just bought a new computer!
// Price without taxes: 1544.96$
// Taxes: 308.99$
// -----------
// Total price: 1853.95$



// computerStore(['regular']);

// OUTPUT

// Invalid order!