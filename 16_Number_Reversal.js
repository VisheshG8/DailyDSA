const solve = (input) => {
    // Write your code here
    let revereNumber = '';
    for (let i = input.length - 1; i >= 0; i--) {
        revereNumber += input[i];
    }
    console.log(parseInt(revereNumber));

}

solve(`237`) // 732