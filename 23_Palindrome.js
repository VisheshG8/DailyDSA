const solve = (input) => {
    let inputArr = input.split('\n');
    let n = parseInt(inputArr.shift());

    for (i = 0; i < n; i++) {
        const word = inputArr[i];
        let reverse = word.split('').reverse().join('');
        console.log(word === reverse ? 'True' : 'False');
    }
}


solve(`2
madam
hello`); // madam madam