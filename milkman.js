const solve = (input) => {
    // Write your code here
    const [r, h] = input.split(" ").map(Number);
    const volume = (3.14 * r * r * h);
    const amount = volume / 1000 * 40
    console.log(amount.toFixed(2));

}

solve("5 24"); 