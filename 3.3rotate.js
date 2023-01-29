function solve(arr) {
    let newArr = [];
    let rotation = Number(arr[arr.length - 1]);

    for(let i = 0; i < arr.length - 1; i++) {
        newArr.push(arr[i]);
    }
    arr = newArr;
    let finalArr = [];

    for (let i = 0; i < rotation; i++) {
        finalArr.unshift(arr[arr.length-1]);
        for (let j = 0; j < arr.length - 1; j++) {
            finalArr.push(arr[j])
        }
        arr = finalArr;
        finalArr = []
        
    }
    console.log(arr.join(' '))
}
solve(['Banana', 'Orange', 'Coconut',

'Apple', '15'])