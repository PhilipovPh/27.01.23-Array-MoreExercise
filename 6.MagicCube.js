function magicMatrices(arr) {

    let isMagic = true;



    for (let i = 0; i < arr.length; i++) { // rows, just access



        let columnSum = 0;

        let rowSum = 0;



        for (let j = 0; j < arr[i].length; j++) {// columns, just access

            columnSum += arr[i][j]; // suming the columns for the current row

        }



        for (let row = 0; row < arr.length; row++) {

            rowSum += arr[row][i]; // suming the rows for the current column

        }



        if (rowSum != columnSum) {

            isMagic = false;

            break;

        }

    }



    console.log(isMagic);

}