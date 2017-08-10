function shellSort(arr) {
    let gap = 1;
    while(gap < arr.length / 5) {
        gap = gap * 5 + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap / 5)) {
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
for (var i = 0;i < 50; i ++) {
    sortArr.push(Math.floor(Math.random() * 100));
}
console.log(JSON.stringify(shellSort(sortArr)))