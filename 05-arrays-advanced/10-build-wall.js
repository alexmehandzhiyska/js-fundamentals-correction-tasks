function buildWall(arr) {
    let sectionHeights = arr.map(Number);

    let concrete = [];
    let pesos = 0;
    let isFinished = false;

    while (isFinished) {
        let curConcrete = 0;

        for (let index = 0; index <= sectionHeights.length; index++) {
            let sectionHeight = sectionHeights[index];

            if (sectionHeight <= 30) {
                sectionHeight++;
                curConcrete += 195;
            }
        }

        concrete.push(curConcrete);
        pesos = curConcrete * 1900;

        if (sectionHeights.every(s => s == 30)) {
            isFinished = true;
        }
    }

    console.log(concrete.join(', '));
    console.log(`${pesos} pesos`);
}
