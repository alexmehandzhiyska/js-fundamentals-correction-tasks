function triangleOfNum(n) {
    let num = 0;
    
    for (let i = 1; i <= n; i++) {
        let printNum = '';
        for ( let j = 1; j <= i; j++){
            num = i;
            printNum += num + ' ';
        
        }
        console.log(printNum);
    }

}
