const solve = (input) => {
    // Write your code here
    const inputArr = input.split("\n");
    const length = parseInt(inputArr.shift());
    let effectedEmployees = [];

    for (let i = 0; i < length; i++) {
        let employee = inputArr[i].split(" ")
        if (parseFloat(employee[1]) > 98.6) {
            effectedEmployees.push(employee[0])
        }

    }
    console.log(effectedEmployees.join(", "));

}

solve(`4
Peter 98.9
Ron 98.5
Cynthia 99.0
Sherry 100`)