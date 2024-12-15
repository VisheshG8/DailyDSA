const solve = (input) => {
    // Split the input string into an array of strings, then map each element to a string
    const inputArray = input.split('\n');
    // console.log(inputArray);

    // Parse the first element as the length
    const length = parseInt(inputArray[0]);
    // console.log(length);

    // The numbers array will be the rest of the input
    const numbers = inputArray[1].split(' '); // Splitting the second line into individual numbers
    // console.log(numbers);

    let reversedOrder = '';

    // Loop through the numbers array in reverse
    for (let i = length - 1; i >= 0; i--) {
        reversedOrder += numbers[i] + ' ';
    }
    console.log(reversedOrder);
}

solve(`5
1 2 3 4 5`);
