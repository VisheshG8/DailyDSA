const solve = (input) => {
    // Write your code here
    const inputArr = input.split('\n');
    const length = parseInt(inputArr.shift());

    for (let i = 0; i < length; i++) {
        let number = parseInt(inputArr[i]);
        console.log(number * number);
    }

}

solve(`3
3
25
13`)