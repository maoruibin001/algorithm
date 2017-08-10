function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let middle = parseInt(arr.length / 2);
    let leftArr = arr.slice(0, middle), rightArr = arr.slice(middle);
    let retLeftArr = mergeSort(leftArr);
    let retRightArr = mergeSort(rightArr);
    let ret =  merge(retLeftArr, retRightArr);
    return ret;
}

function merge(leftArr, rightArr) {
    let result = [];
    while(leftArr.length && rightArr.length) {
        if (leftArr[0] > rightArr[0]) {
            result.push(rightArr.shift());
        } else {
            result.push(leftArr.shift());
        }
    }

    while(leftArr.length) {
        result.push(leftArr.shift());
    }

    while( rightArr.length ) {
        result.push( rightArr.shift() );
    }

    return result;
}

var sortArr = [];
for (var i = 0;i < 1000; i ++) {
    sortArr.push(Math.floor(Math.random() * 10000));
}
console.time('归并排序耗时 ');
console.log(mergeSort(sortArr));
console.timeEnd('归并排序耗时 ');