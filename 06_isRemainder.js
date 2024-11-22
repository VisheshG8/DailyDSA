const solve = (input) => {
    // Write your code here
    const [ca, co] = input.split(" ").map(Number);
    if (ca % co === 0) {
        console.log("YES")
    } else {
        console.log("NO")
    }

}

solve("10 2"); // Expected output: NO