const solve = (input) => {
    // Write your code here
    const lines = input.trim().split("\n");
    const length = parseInt(lines.shift());
    const numbers = lines[0].split(" ").map(Number);

    for (let i = 0; i < length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log("EVEN")
        } else {
            console.log("ODD")
        }

    }
}

solve(`5
1 2 3 4 5`);