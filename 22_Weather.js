const solve = (input) => {
    // Write your code here
    const inputArray = input.split('\n');
    const length = parseInt(inputArray.shift());

    for (let i = 0; i < inputArray.length; i++) {
        const [t, h] = inputArray[i].split(' ').map(Number);
        if (t >= 30 && h >= 90) {
            console.log('Hot and Humid');
        }
        else if (t >= 30 && h < 90) {
            console.log('Hot');
        }
        else if (t < 30 && h >= 90) {
            console.log('Cool and Humid');
        }
        else if (t < 30 && h < 90) {
            console.log('Cool');
        }


    }

};

solve(`2
34 98
23 89`);