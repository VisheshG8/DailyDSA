const solve = (input) => {
    for (let i = 0; i < input; i++) {
        console.log(' '.repeat(input - i - 1) + '*'.repeat(i * 2 + 1));


    }
}

solve(5); //     *