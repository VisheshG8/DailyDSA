const solve = (n) => {
    // Build the pattern in a single string
    let starPattern = '';
    for (let i = 1; i <= n; i++) {
        starPattern += '*'.repeat(i) + '\n';
    }

    // Print the entire pattern at once
    process.stdout.write(starPattern.trim());
};

solve(5); //     *