function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let count = 0;
function bubble(arr) {
    let flag = arr.length;
    let swapPos; //标识排序位置。
    for (let i = 0; i < arr.length; i ++) {
        swapPos = 0;
        for (let j = 0; j < flag - 1; j ++ ) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                swapPos = j + 1;
            } 
        }
        flag = swapPos;
    }

    return arr;
}

let arr = [7,11, 4,2, 3, 75, 63, 2, 9,1, 32, 3, 75, 6, 23, 9,1, 34, 14, 10];

console.log(bubble(arr));
console.log(count);