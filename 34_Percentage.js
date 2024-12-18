const solve = (input) => {
    // Write your code here

    const inputArr = input.split("\n");
    const length = parseInt(inputArr.shift());
    let sum = 0;
    for (let i = 0; i < length; i++) {
        sum += parseInt(inputArr[i]);
    }
    const percentage = parseFloat(((sum / length) / 80) * 100).toFixed(2);
    console.log(`${percentage}%`)

}

solve(`5
77
76
68
72
79`)