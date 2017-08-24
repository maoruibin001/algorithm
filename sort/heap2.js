// var swap = require('./swap.js');
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
count = 0;
function heap(arr) {
    // 建堆
    let len = arr.length;
    for (let i = parseInt(len / 2) - 1; i >= 0 ; i --) {
        // 从最下面一层，一层一层往上建堆，这样就保证了上面一层一定比下面一层的左右孩子大
       heapify(arr, i, len);
    }

    for (let j = len - 1; j >= 0; j --) {
        swap(arr, 0, j);
        heapify(arr, 0, j);
    }
    return arr;
}

function heapify(arr, i, len) {
    let max = i,//双亲
        left = 2 * i + 1, //左孩子
        right = 2 * i + 2;// 右孩子
    if (len > left && arr[left] > arr[max]) {//左孩子存在，并且左孩子大于双亲，则最大值为左孩子
        max = left;
    }
    if (len > right && arr[right] > arr[max]) {//右孩子存在，并且右孩子大于双亲，则最大值为右孩子
        max = right;
    }

    if (max !== i) { //如果双亲不是最大值，则双亲和当前的最大值交换，并重新排序比较。
        swap(arr, i, max);
        heapify(arr, max, len);
    }
    //经过这样一轮之后，就构建了一个完整的双亲和孩子结构。
    return arr;
}

var arr=[91,60,96,13,35,63,324,223,23,44,22,90, 25,45];
console.log(heap(arr));
console.log(count);