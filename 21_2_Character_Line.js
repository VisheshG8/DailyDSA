const solve = (input) => {
    // Write your code here

    for (let i = 0; i < input.length; i += 2) {
        if (i == input.length - 1) {
            if (input.length % 2 !== 0) {
                console.log(`${input[i]}`)
            }
            return
        }
        console.log(`${input[i]}${input[i + 1]}`);
    }

}

solve("VVA")