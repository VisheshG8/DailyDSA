const solve = (input) => {
    // Write your code here
    const inputArr = input.split("\n");
    const length = parseInt(inputArr.shift());
    for (let i = 0; i < length; i++) {
        const notDivisibleArray = [];
        let number = parseInt(inputArr[i]);
        for (let i = 1; i <= number; i++) {
            if (i % 3 == 0) {
                continue;
            }
            notDivisibleArray.push(i);
        }
        console.log(notDivisibleArray.join(" "))
    }

}

solve(`3
10
5
15`)