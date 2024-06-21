function treasureHunt(arr) {
    let items = arr.shift().split('|');
    let command = arr.shift();

    while (command !== 'Yohoho!') {
        let tokens = command.split(' ');
        const action = tokens.shift();

        switch (action) {
            case 'Loot':
                const newItems = tokens;

                for (const newItem of newItems) {

                    if (!items.includes(newItem)) {
                        items.unshift(newItem);
                    }
                }

                break;

            case 'Drop':
                const index = Number(tokens.shift());

                if (index >= 0 && index < items.length) {
                    const deletedItem = items.splice(index, 1)[0];
                    items.push(deletedItem);
                }

                break;

            case 'Steal':
                const countToSteal = Number(tokens.shift());
                const stolenItems = items.splice(-countToSteal);
                console.log(stolenItems.join(', '));
                break;
        }

        command = arr.shift();
    }

    if (items.length === 0) {
        console.log("Failed treasure hunt.");
    } else {
        let gainSum = 0;

        for (const item of items) {
            gainSum += item.length;
        }

        const averageGain = gainSum / items.length;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }
}

// treasureHunt([
//     "Gold|Silver|Bronze|Medallion|Cup",
//     "Loot Wood Gold Coins",
//     "Loot Silver Pistol",
//     "Drop 3",
//     "Steal 3",
//     "Yohoho!"
// ]);

// OUTPUT

// Medallion, Cup, Gold
// Average treasure gain: 5.40 pirate credits.



treasureHunt([
    "Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"
]);


// OUTPUT
// Coal, Diamonds, Silver, Shotgun, Gold, Medals
// Failed treasure hunt.
