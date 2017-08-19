function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

var count = 0;
function bubble(arr) {
    let hasSwap = true;
    for (let i = 0; i < arr.length && hasSwap; i ++) {
        hasSwap = false
        for (let j = 0; j < arr.length - 1 - i; j ++ ) {
            count ++;
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
console.log(count);