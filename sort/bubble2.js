function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

var count = 0;
function bubble(arr) {
    let flag = arr.length;
    let t;
    for (let i = 0; i < arr.length; i ++) {
        t = 0;
        for (let j = 0; j < flag - 1; j ++ ) {
            count ++;
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                t = j + 1;
            } 
        }
        flag = t;
    }

    return arr;
}

var arr = [7,11, 4,2, 3, 75, 63, 2, 9,1, 32, 3, 75, 6, 23, 9,1, 34, 14, 10];

console.log(JSON.stringify(bubble(arr)));
console.log(count);