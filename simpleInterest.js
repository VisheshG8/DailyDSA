const solve = (input) => {
    // Write your code here
    const [p, r, t] = input.split(" ").map(Number);

    const interest = (p * r * t) / 100;
    console.log(interest.toFixed(6))
}
solve("1000 5 2");