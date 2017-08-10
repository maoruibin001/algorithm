function shellSort(arr) {
    let gap = 1, times = 2;
    while(gap < arr.length / times) {
        gap = gap * times + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap / times)) {
        console.log(gap);
        for (let i = gap; i < arr.length; i ++) {
            let temp = arr[i];
            flag = i;
            for (let j = i - gap; j >= 0 && arr[j] > temp; j-= gap) {
                arr[j + gap] = arr[j];
                flag = j;
            }
            arr[flag] = temp;
        }
    }

    return arr;
}
var sortArr = [];
for (let i = 0;i < 50; i ++) {
    sortArr.push(Math.floor(Math.random() * 100));
}
var nativeSort = sortArr.concat([]);
console.time('shell');
console.log(shellSort(sortArr));
console.timeEnd('shell');

console.time('nativeSort');
console.log(nativeSort.sort());
console.timeEnd('nativeSort');
