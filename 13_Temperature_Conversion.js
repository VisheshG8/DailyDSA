const solve = (input) => {
    // Write your code here
    const inputArray = input.split('\n').map(String);
    const length = parseInt(inputArray.shift());
    let temp = 0;

    for (let i = 0; i < length; i++) {
        temp = ((9 * parseFloat(inputArray[i])) / 5) + 32;
        console.log(temp.toFixed(2));
    }



}

solve(`2
34.52
12`)