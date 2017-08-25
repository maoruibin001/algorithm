// 计数排序法
function countingSort(array) {
    var len = array.length,
        B = [],
        C = [],
        min = max = array[0];
    console.time('计数排序耗时');
    //找出最大和最小值，并把元素放到新数组中它的值所对应的位置上，入a[1] = 5 , 则C[5] = 1.如果该位置已经存在元素，那该位置值+1
    for (var i = 0; i < len; i++) {
        min = min <= array[i] ? min : array[i];
        max = max >= array[i] ? max : array[i];
        C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1;
    }

    //这一步是关键，计算每个位置前面有多少小于或等于它的元素。例如本来C为[, 1, 0, 1, 2] 那么在C[1]前面有多少个比C[1]小的值，1个，在C[2]
    //前面有多少个比C[2]小的值，1 + 0 = 1个，在C[3]前有 1+0+1 = 2个，以此类推。
    for (var j = min; j < max; j++) {
        C[j + 1] = (C[j + 1] || 0) + (C[j] || 0);
    }
    // 现在C中存储的C[i]元素为小于i的元素个数

    // 扫描整个数组，对数组中的每一个元素C[array[k]]，将C[array[k]]放在输出数组的第C(C[array[k] - 1])个位置上，并将C[array[k]]减1。
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


var sortArr = [];
for (var i = 0;i < 1000; i ++) {
    sortArr.push(Math.floor(Math.random() * 10000));
}
console.time('计数排序耗时 ');
console.log(countingSort(sortArr)); 
console.timeEnd('计数排序耗时 ');