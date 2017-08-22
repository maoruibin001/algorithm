const swap = require('./swap.js');

let count = 0;
function select(arr) {
    for (let i = 0; i < arr.length - 1; i ++) {
        min = i;
        for (let j = i + 1; j < arr.length; j ++) {
            count ++;
            if (arr[j] < arr[min]) {
                min = j;//此处找出最小值的index
            }
        }
        if (min !== i) {
            swap(arr, i, min);
        }
    }
    return arr;
}


let arr = [];
for (let i = 0; i < 100; i ++) {
    arr.push(parseInt(Math.random() * 100));
}
console.log(select(arr));

console.log(count);