// 冒泡排序优化
const optimiBubble = function(arr, count) {
    count = count || 0;
    let position = arr.length - 1;
    while (position > 0) {
        let posReset = 0;
        for (let i = 0; i < position; i ++) {
            count ++;
            if (arr[i] > arr[i + 1]) {
                posReset = i;
                let flag = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = flag;
            }
        }
        position = posReset;
    }

    return {
        arr,
        count
    };
}

let arr = [44,9,4,38];
console.log('arr2',arr);
let ret = optimiBubble(arr);

console.log('排序结果为： ', ret.arr);
console.log('排序次数为： ', ret.count);