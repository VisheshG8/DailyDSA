const solve = (input) => {
    // Write your code here
    let n = parseInt(input)
    let starPattern = '';
    for (let i = 1; i <= n; i++) {
        starPattern += '*'.repeat(i);
        if (i < n) {
            starPattern += '\n'
        }
    }

    // Print the entire pattern at once
    process.stdout.write(starPattern);
};

solve(5); //     *