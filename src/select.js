// 选择排序
function selection(arr, count) {
    console.time('选择排序排序耗时1');
    count = count || 0;
    let minIndex, temp;
    for (var i = 0; i < arr.length; i ++) {
        minIndex = i;
        for (let j = i; j < arr.length; j ++) {
            count ++;
            if (arr[j] < arr[minIndex]) {
                minIndex = [j];
            }
        }
        temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    console.timeEnd('选择排序排序耗时1');
    return {arr, count};
}

var optimiBubble = function(arr, count) {
     console.time('改进后冒泡排序耗时1');
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
 console.timeEnd('改进后冒泡排序耗时1');
    return {
        arr,
        count
    };
}

var sortArr = [];
for (var i = 0;i < 1000; i ++) {
    sortArr.push(Math.floor(Math.random() * 10000));
}
var sortArr1 = sortArr.concat([]);
var ret = selection(sortArr);
var ret2 = optimiBubble(arr);

console.log(ret);
console.log(ret2)
