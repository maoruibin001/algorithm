let swap = require('./swap.js');
function bubble(arr) {
    let hasSwap = true;
    for (let i = 0; i < arr.length && hasSwap; i ++) {
        hasSwap = false
        for (let j = 0; j < arr.length - 1 - i; j ++ ) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                hasSwap = true;
            } 
        }
    }

    return arr;
}

var arr = [7,11, 4,2, 3, 75, 63, 2, 9,1, 32, 3, 75, 6, 23, 9,1, 34, 14, 10];

console.log(bubble(arr))