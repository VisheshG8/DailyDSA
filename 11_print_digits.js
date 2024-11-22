const solve = (input) => {
    // Write your code here

    const inputArray = input.split('\n').map(String)
    const length = parseInt(inputArray[0]);

    for (let i = 1; i <= length; i++) {
        console.log(`${inputArray[i][0]} ${inputArray[i][1]}`)
    }

}

solve(`3
12
45
78`)