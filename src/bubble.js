// 冒泡排序
const bubble = function(arr, count) {
    count = count || 0;
    let ret = arr || [];
    for (let i = 0; i < arr.length; i ++) {
        for (let j = 0; j <arr.length - i -1; j ++) {
            count ++;
            let k = arr[j];
            if (arr[j] > arr[j + 1]) {
            arr[j] = arr[j + 1];
            arr[j + 1] = k;
            }
        }
    }
    return {
        arr,
        count
    };
}
let arr = [44,9,4,38];
console.log('arr1',arr);
let ret = bubble(arr);

console.log('排序结果为： ', ret.arr);
console.log('排序次数为： ', ret.count);