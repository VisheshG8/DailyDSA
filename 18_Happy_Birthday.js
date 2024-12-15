const solve = (input) => {
    // Write your code here
    const inputArray = input.split(" ").map(String);
    const name = inputArray[0];
    const y0b = parseInt(inputArray[1]);
    cy = 2020;
    const age = cy - y0b;

    console.log(`Happy Birthday ${name}! Your current age is ${age}`)

}

solve("John 1996") // Happy Birthday John! Your current age is 20