function binaryInsertionSort(arr, index) {
    console.time('二分插入排序耗时：')
    let count = index || 0;

    for (let i = 1; i < arr.length; i ++) {
        let left = 0, right = i - 1, middle;
        let key = arr[i];
        //二分查找法，找到待插入的位置
        while (left <= right) {
            middle = parseInt((left + right) / 2);
            if (key < arr[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
        // 插入
        for (let j = i - 1; j >= left; j --) {
            arr[j + 1] = arr[j];
        }
        arr[left] = key;
    }
    console.timeEnd('二分插入排序耗时：')
    return arr;
}

let sortArr = [];
for (let i = 0;i < 100; i ++) {
    sortArr.push(parseInt(Math.random() * 100));
}
console.log(binaryInsertionSort(sortArr));