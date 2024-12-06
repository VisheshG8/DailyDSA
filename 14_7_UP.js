const solve = (input) => {
    // Write your code here
    const inputArray = input.split('\n').map(String);
    const length = parseInt(inputArray.shift());

    for (let i = 0; i < length; i++) {
        if (parseInt(inputArray[i]) > 7) {
            console.log("UP");
        } else if (parseInt(inputArray[i]) < 7) {
            console.log("DOWN");
        } else if (parseInt(inputArray[i]) == 7) {
            console.log("EQUAL");
        }


    }

}

solve(`3
12
7
45`)