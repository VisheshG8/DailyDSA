const solve = (input) => {
    // Write your code here
    const inputArr = input.split("\n");
    const length = parseInt(inputArr.shift());

    for (let i = 0; i < length; i++) {
        let arr = [];
        for (let j = 0; j < parseInt(inputArr[i]); j++) {
            if (j == 0 || j == 1) {
                arr.push(j);
            } else {
                arr.push(arr[j - 1] + arr[j - 2]);
            }
        }
        console.log(arr.join(" "));

    }
}

solve(`2
1
8`)