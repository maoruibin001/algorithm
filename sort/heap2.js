var swap = require('./swap.js');
count = 0;
function heap(arr) {
    // 建堆
    let len = arr.length, newArr = arr;
    for (let i = parseInt(len / 2) - 1; i >= 0 ; i --) {
        newArr = heapify(newArr, i, len);
    }

    for (let j = len - 1; j >= 1; j --) {
        swap(arr, 0, j);
        heapify(arr, 0, j);
    }
    return arr;
}

function heapify(arr, i, len) {
    let max = i,left = 2 * i + 1, right = 2 * i + 2;
    if (len > left && arr[left] > arr[max]) {
        max = left;
    }
    if (len > right && arr[right] > arr[max]) {
        max = right;
    }

    if (max !== i) {
        swap(arr, i, max);
        heapify(arr, max, len);
    }

    return arr;
}

var arr=[91,60,96,13,35,65,46,65,10,30,20,31,77,81,22];
console.log(heap(arr));
console.log(count);