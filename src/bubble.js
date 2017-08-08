let arr = [9, 5, 7, 1, 3, 2, 6, 20, 8, 6];

const bubble = function(arr) {
    let ret = arr || [];
    for (let i = 0; i < arr.length; i ++) {
        for (let j = 0; j <arr.length - i -1; j ++) {
            let k = arr[j];
            if (arr[j] > arr[j + 1]) {
            arr[j] = arr[j + 1];
            arr[j + 1] = k;
            }
        }
        
    }
    return ret;
}

console.log(JSON.stringify(bubble(arr)));