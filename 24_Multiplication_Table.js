const solve = (input) => {
    let inputArr = input.split('\n');
    let length = parseInt(inputArr.shift());
    for (i = 0; i < length; i++) {
        let row = [];
        for (j = 1; j <= 10; j++) {
            row.push(inputArr[i] * j);
        }
        console.log(row.join(' '));
    }
}

solve(`2
2
3`); // 2 4 6 8 10 12 14 16 18 20

