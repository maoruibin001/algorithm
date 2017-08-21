const swap = require('./swap.js');

var count = 0;
function select(arr) {
    for (let i = 0; i < arr.length - 1; i ++) {
        min = i;
        for (let j = i + 1; j < arr.length; j ++) {
            count ++;
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
           
            swap(arr, i, min);
        }
    }
    return arr;
}


var arr = [];
for (var i = 0; i < 100; i ++) {
    arr.push(parseInt(Math.random() * 100));
}
console.log(JSON.stringify(select(arr)));

console.log(count);