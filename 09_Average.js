const solve = (input) => {
    // Write your code here
    const weights = input.split(" ").map(Number);

    const sum = weights.reduce((accumulatedValue, newValue) => accumulatedValue + newValue, 0)

    const average = (sum / 10);
    console.log(average.toFixed(6))
}

solve(`1 2 3 4 5 6 7 8 9 10`); // Expected output: 5.500000
