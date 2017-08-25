function binary(arr, key) {
    let begin = 0, end = arr.length - 1, middle;
    while(begin <= end) {
        middle = Math.round(begin + (key - arr[begin])/(arr[end] - arr[begin]) * (end - begin) );
        console.log(middle);
        if (arr[middle] === key) {
            return middle;
        } else if (arr[middle] < key) {//如果中间元素比查找元素还小，则下次开始查找的元素为中间元素的后面一个
            begin = middle + 1;
        } else {
            end = middle - 1;//如果中间元素比查找元素还大，则下次最后查找的元素为中间元素的前面一个
        }
    }
    return -1;
}

var arr = [1, 2,4, 6];

console.log(binary(arr, 3))