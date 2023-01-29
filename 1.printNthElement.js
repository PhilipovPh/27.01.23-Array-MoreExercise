function solve(arr) {
    let step = Number(arr[arr.length-1]);
    let neArr = [];
    let element = '';

    for (let i = 0; i < arr.length - 1; i += step) {
        element = arr[i];
        neArr.push(element);
    }
    console.log(neArr.join(' '));
}
solve(['5', '20', '31', '4', '20', '2']);