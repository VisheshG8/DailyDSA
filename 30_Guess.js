const solve = (input) => {
    // Write your code here
    const inputArr = input.split("\n");
    const birthDate = parseInt(inputArr.shift());

    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] == birthDate) {
            console.log("Correct Guess");
            return
        } else {
            console.log("Incorrect Guess");
        }

    }

}

solve(`14
3
23
19
14
12`)