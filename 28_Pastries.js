const solve = (input) => {
    // Write your code here
    const inputArr = input.split("\n");
    let n = inputArr[0];
    let [p, c] = n.split(" ").map(Number);
    let servings = inputArr.slice(1).map(Number);

    for (let i = 0; i < c; i++) {
        if (p > 0) {
            console.log("Enjoy your dessert!");
        } else {
            console.log("Sorry, we are all out!");
        }
        p -= servings[i];
    }

}

solve(`15 6
3
2
7
4
2
1`)