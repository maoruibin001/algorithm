let swap = require('./swap.js');
let count = 0;
function insert(arr) {
    for (let i = 1; i < arr.length; i ++) {
        let flag = arr[i],
            index = i,
            j = i - 1;
        if (arr[j] > arr[i]) {
            for (j; j >= 0 && arr[j] > flag; j --) {
                count ++;
                arr[j + 1] = arr[j];
                index = j;
            }
            arr[index] = flag;
        }
        
    }

    return arr;
}

let arr = [];
for (let i = 0; i < 100; i ++) {
    arr.push(parseInt(Math.random() * 100));
}
console.log(insert(arr));
console.log(count);