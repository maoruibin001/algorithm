var count = 0;
// 二分查找法
function binary(arr, ele) {
    function binaryByIndex(arr, start, end, ele) {
        count ++;
        var middle  = Math.floor((start + end) / 2);
        if (ele === arr[middle]) {
            return middle;
        }
        if (start >= end) {
            return -1;
        }
        if ( ele < arr[middle] ) {
            return binaryByIndex(arr, start, middle - 1 , ele);
        } else if ( ele > arr[middle]) {
            return binaryByIndex(arr, middle + 1, end, ele);
        } 
    }
    return binaryByIndex(arr, 0, arr.length - 1, ele);
}
// 循环二分查找法
function circleBinary(arr, ele) {
    let left = 0, right = arr.length - 1, middle = parseInt((left + right)/ 2)
    while (left < right) {
        count ++;
        if (arr[middle] === ele) {
            return middle;
        } else if (arr[middle] > ele){
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return -1;
}
var arr = [1, 3, 4];
console.log(circleBinary(arr, 4));
console.log(count)