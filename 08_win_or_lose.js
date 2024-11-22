const solve = (input) => {
    // Split input into lines
    const lines = input.trim().split("\n");

    // First line is the number of integers
    const length = parseInt(lines[0], 10);

    // Second line contains the integers
    const integers = lines[1].split(" ").map(Number);

    const max = maxNumber(length, integers);

    if (max % 2 === 0) {
        return console.log("WON");
    } else {
        return console.log('LOST')
    }


}

const maxNumber = (length, integers) => {
    let max = integers[0];

    for (let i = 0; i < length; i++) {
        if (integers[i] > max) {
            max = integers[i];
        }
    }
    return max
}

solve(`5
1 2 3 4 6`);