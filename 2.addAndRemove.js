function solve(arr) {
    let newArr = [];
    let num = 0;
    let info = '';

    for (let i = 0; i < arr.length; i++) {
        num = i + 1;
        info = String(arr[i]);
        if (info === 'add') {
            newArr.push(num)
        } else if (info = 'remove') {
            newArr.pop();
        }
    }
    if (newArr.length > 0) {
        console.log(newArr.join(' '));
    } else {
        console.log('Empty');
    }
}

solve(['add', 'add', 'add', 'add'])
console.log('--------------------');
solve(['add', 'add', 'remove', 'add', 'add'])