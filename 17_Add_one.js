const solve = (input) => {
    // Write your code here
    const inputArray = input.split(" ").map(String);
    const name = inputArray[0];
    const age = parseInt(inputArray[1]);

    console.log(`Hello ${name}! Next year, you will be ${age + 1} years old`)

}

solve("John 20") // Hello John! Next year, you will be 21 years old