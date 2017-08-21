const swap = require('./swap.js');

var count = 0;

function shell(arr) {
    let space = 1, times = 2;

    while(arr.length / times > space) {
        space = times * space + 1;
    }

    for (space; space > 0;  space = Math.floor(space / times)) {
        console.log(space);
        for (let i = space; i < arr.length; i += 1) {
            let flag = arr[i],
                index = i;
            for (let j = i - space; j >= 0 && arr[j] > flag; j -= space) {
                count ++;
                arr[j + space] = arr[j];
                index = j;
            }
            arr[index] = flag;
        }
    }
    return arr;
}

var arr = [];
for (var i = 0; i < 100; i ++) {
    arr.push(parseInt(Math.random() * 100));
}
console.log(shell(arr));
console.log(count);