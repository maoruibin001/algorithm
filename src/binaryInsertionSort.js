function binaryInsertionSort(array) {
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        console.time('二分插入排序耗时：');
 
        for (var i = 1; i < array.length; i++) {
            var key = array[i], left = 0, right = i - 1;
            while (left <= right) {
               
                var middle = parseInt((left + right) / 2);
                if (key < array[middle]) {
                    right = middle - 1;
                } else {
                    left = middle + 1;
                }
            }
            for (var j = i - 1; j >= left; j--) {
                array[j + 1] = array[j];
            }
            array[left] = key;
        }
        console.timeEnd('二分插入排序耗时：');
 
        return array;
    } else {
        return 'array is not an Array!';
    }
}

var sortArr = [3, 4, 2, 34, 25,234,12, 15,47];
// for (var i = 0;i < 1000; i ++) {
//     sortArr.push(Math.floor(Math.random() * 10000));
// }
console.log(binaryInsertionSort(sortArr));