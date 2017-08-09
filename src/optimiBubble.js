// 冒泡排序优化
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
var ret = optimiBubble(sortArr);

console.log('排序结果为： ', ret.arr);
console.log('排序次数为： ', ret.count);