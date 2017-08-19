function binary(arr, key) {
    let begin = 0, end = arr.length - 1, middle;

    while(begin <= end) {
        middle = parseInt((begin + end) / 2);
        console.log('begin:', begin);
        console.log('end: ', end);
        if (arr[middle] === key) {
            return middle;
        } else if (arr[middle] < key) {
            begin = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}

var arr = [1, 2,4, 6];

console.log(binary(arr, 1))