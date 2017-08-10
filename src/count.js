// 技术排、、序法
function countingSort(array) {
    var len = array.length,
        B = [],
        C = [],
        min = max = array[0];
    console.time('计数排序耗时');
    for (var i = 0; i < len; i++) {
        min = min <= array[i] ? min : array[i];
        max = max >= array[i] ? max : array[i];
        C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1;
    }
    console.log('primary: ', C)
    for (var j = min; j < max; j++) {
        C[j + 1] = (C[j + 1] || 0) + (C[j] || 0);
    }
    // C中存储的C[i]元素为小于i的元素个数
    console.log("end: ", C);
    for (var k = 0; k < len; k++) {
        B[C[array[k]] - 1] = array[k];
        C[array[k]]--;
    }
    console.timeEnd('计数排序耗时');
    return B;
}


function count2(arr) {
    var len = arr.length,
        A = [],
        B = [],
        min = max = arr[0];

    for (let i = 0; i < len; i ++) {
        min = min <= arr[i] ? min : arr[i];
        max = max >= arr[i] ? max : arr[i];
        A[arr[i]] = A[arr[i]] ? A[arr[i]] + 1 : 1;
    }
    for (let j = min; j < max; j ++) {
        A[j + 1] = (A[j + 1] || 0) + (A[j] || 0);
    }
     for (var k = 0; k < len; k++) {
        B[A[arr[k]] - 1] = arr[k];
        A[arr[k]]--;
    }
    return B;
}
var arr = [1,3, 1, 2];
console.log(count2(arr)); 