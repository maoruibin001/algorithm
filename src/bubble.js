// 冒泡排序
const bubble = function(arr, count) {
    count = count || 0;
    let ret = arr || [], isWrap = false;
    for (let i = 0; i < arr.length; i ++) {
        for (let j = 0; j <arr.length - i -1; j ++) {
            count ++;
            let k = arr[j];
            if (arr[j] > arr[j + 1]) {
            arr[j] = arr[j + 1];
            arr[j + 1] = k;
            isWrap = true;
            }
        }
        if (!isWrap) return {
             arr,
            count
        }
    }
    return {
        arr,
        count
    };
}


var sortArr = [7,2, 3, 5, 8, 4];
// for (var i = 0;i < 1000; i ++) {
//     sortArr.push(Math.floor(Math.random() * 10000));
// }
console.time('冒泡排序耗时 ');
console.log(bubble(sortArr));
console.timeEnd('冒泡排序耗时 ');