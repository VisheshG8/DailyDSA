const solve = (input) => {
    // Write your code here
    const inputArray = input.split('\n').map(String);
    const length = parseInt(inputArray.shift());

    for (let i = 0; i < length; i++) {
        if (parseInt(inputArray[i]) % 6 === 0) {
            console.log('True')

        } else {
            console.log('False')
        }
    }



}

solve(`4
457
66
0
40`)