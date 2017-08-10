function binaryInsertionSort(arr, index) {
    console.time('二分插入排序耗时：')
    let count = index || 0;

    for (let i = 1; i < arr.length; i ++) {
        let left = 0, right = i - 1, middle;
        let key = arr[i];
        while (left <= right) {
            middle = parseInt((left + right) / 2);
            if (key < arr[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }

        for (var j = i - 1; j >= left; j --) {
            arr[j + 1] = arr[j];
        }
        arr[left] = key;
    }
    console.timeEnd('二分插入排序耗时：')
    return arr;
}

var sortArr = [0, 1, 3, 4, 2];
for (var i = 0;i < 1000; i ++) {
    sortArr.push(Math.floor(Math.random() * 10000));
}
console.log(binaryInsertionSort(sortArr));