function solve(arr) {
    let newArr = [arr[0]];
    let biggestNumber = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let currentNumb = arr[i];


        if (currentNumb >= biggestNumber) {
            newArr.push(currentNumb);
            biggestNumber = currentNumb;
        }
    }
    console.log(newArr.join(' '));
}
solve([20, 3, 2, 15, 6, 1]);