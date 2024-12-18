const solve = (input) => {
    // Write your code here
    const inputArr = input.split("\n");
    const length = parseInt(inputArr.shift());

    for (let i = 0; i < length; i++) {
        let line = inputArr[i];
        for (let j = 0; j < line.length; j++) {
            if (line[j] === "0" && line[j + 1] === "0") {
                console.log("YES");
                break;
            }
            else if (j === line.length - 1) {
                console.log("NO");
            }

        }

    }
}

solve(`3
1011
10000
1010101001`)