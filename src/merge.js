function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let middle = parseInt(arr.length / 2);
    let leftArr = arr.slice(0, middle), rightArr = arr.slice(middle);
    console.log('leftArr: ', leftArr);
    console.log('rightArr: ', rightArr);
    let retLeftArr = mergeSort(leftArr);
    let retRightArr = mergeSort(rightArr);
    let ret =  merge(retLeftArr, retRightArr);
    console.log('ret', ret);
    return ret;
}

function merge(leftArr, rightArr) {
    let result = [];
    // console.log('leftArr:', leftArr);
    // console.log('rightArr:', rightArr);
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
for (var i = 0;i < 10; i ++) {
    sortArr.push(Math.floor(Math.random() * 10));
}
sortArr = [3, 2, 5, 1, 4]
console.time('归并排序耗时 ');
console.log(mergeSort(sortArr));
console.timeEnd('归并排序耗时 ');