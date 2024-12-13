const solve = (input) => {
    // Write your code here
    const inputArray = input.split('\n').map(String);
    const length = parseInt(inputArray.shift());

    for (let i = 0; i < length; i++) {
        const sides = inputArray[i].split(' ').map(Number);
        const [a, b, c] = sides;
        if (a + b >= c && a + c >= b && b + c >= a) {
            console.log(a + b + c);
        } else {
            console.log("-1");
        }
    }
}

solve(`2
1 2 3
1 2 4`)