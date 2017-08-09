function swap (arr, a, b) {
    let temp = arr[a]; 
    arr[a] = arr[b];
    arr[b] = temp;
}

// 冒泡排序2次优化（一次排除两个最值）
const optimiBubble2 = function(arr, count) {
    var count = count || 0;
    let low = 0, high = arr.length - 1;
    while (low < high) {
        for (let i = low; i < high; i ++) {
            count ++;
            if (arr[i] > arr[i + 1]) {
               let flag = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = flag;
            } 
        }
        --high;
        console.log(arr)
        for (let j = low; j < high; j ++) {
             count ++;
            if (arr[j] < arr[j -1]) {
                let flag = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = flag;
            }
        }
        console.log(arr)
        ++low;
    }
    return {
        arr,
        count
    }
}

let arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log('arr3',arr);
let ret = optimiBubble2(arr);

console.log('排序结果为： ', ret.arr);
console.log('排序次数为： ', ret.count);