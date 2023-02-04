function solve(arr) {
    let inputOrder = arr[0];
    let inputArr = []
    let newArr = [];

    for (let i = 1; i < arr.length - 1; i++) {
        newArr.push(arr[i]);
    }
    arr = newArr;
    for (let i = 0; i < arr.length; i++) {
    }
    arr.slice(' ');
    console.log(arr); 
}
solve(['CS WoW Diablo',

'Install LoL',

'Uninstall WoW',

'Update Diablo',

'Expansion CS-Go',

'Play!'])