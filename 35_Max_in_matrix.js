const solve = (input) => {
    const inputArr = input.split('\n')
    const [rows, cols] = inputArr.shift().split(' ').map(Number)
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < rows; i++) {
        const row = inputArr[i].split(' ').map(Number)
        const rowMax = Math.max(...row)
        if (rowMax > max) {
            max = rowMax
        }
    }
    console.log(max)

}




solve(`2 3
32 45 12
33 11 22`)