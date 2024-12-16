const solve = (input) => {
    let inputArr = input.split('\n');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let n = parseInt(inputArr.shift())
    console.log(typeof n);

    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < inputArr[i].length; j++) {
            if (vowels.includes(inputArr[i][j].toLowerCase())) {
                count++;
            }
        }
        console.log(count);
    }
}

solve(`5
Neha
Rajan
Aamir
Bonnie
Ram
`); // 5 4 13 2 1