function solve(arr) {
    let newArr = [];
    let rotation = Number(arr[arr.length - 1])

    for (let i = 0; i < arr.length -1; i++) {
        newArr.push(arr[i]);
    }
    arr = newArr;
    let finalArr = [];

    for (let i = 0; i < rotation; i++) {
        let currentNumb = arr[0];
        for (let j = 1; j < arr.length; j++) {
            finalArr.push(arr[j]);
        }
        finalArr.push(currentNumb);
        arr = finalArr;
        finalArr = []
    }
    console.log(arr.join(' '));
}
solve([1, 2, 3, 4, 5])