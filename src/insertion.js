function insertion(arr, count) {
    count = count || 0;
    for (let i = 1; i < arr.length; i ++) {
        let temp = arr[i],insertPos = i;
        for (let j = i - 1; j >= 0 && arr[j] > temp; j --) {
            arr[j + 1] = arr[j];
            insertPos = j;
        }
        arr[insertPos] = temp;
    }
    return {
        arr,
        count
    }
}

function insertionSort(array, count) {
    count = count || 0;
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        console.time('插入排序耗时：');
        for (var i = 1; i < array.length; i++) {
            var key = array[i];
            var j = i - 1;
            while (j >= 0 && array[j] > key) {
                count ++;
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
        console.timeEnd('插入排序耗时：');
        return {array,count};
    } else {
        return 'array is not an Array!';
    }
}

var arr=[44,38,5,47];
var arr2=[44,38,5,40];
var sortArr = [];
for (var i = 0;i < 1000; i ++) {
    sortArr.push(Math.floor(Math.random() * 10000));
}
console.log(insertion(arr).arr);
console.log(insertionSort(sortArr).count);