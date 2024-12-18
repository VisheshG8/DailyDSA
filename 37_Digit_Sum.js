const solve = (input) => {
    // Write your code here
    const inputArr = input.split("\n");
    const length = parseInt(inputArr.shift());

    for (let i = 0; i < length; i++) {
        let sum = 0;
        let lineArr = inputArr[i].split("").map(Number)
        for (let j = 0; j < lineArr.length; j++) {
            sum += lineArr[j];
        }
        console.log(sum)
    }

}

solve(`2
13246
12212`)