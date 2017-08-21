var count = 0;
function shell(arr) {

    let gap = 1, times = 2;
    while ( gap < arr.length / times) {
        gap = gap * times + 1;
    }

    for (gap; gap > 0; gap = parseInt(gap / times)) {
        for (let i = gap; i < arr.length; i += 1) {
            let flagValue = arr[i], flag = i;
            for (let j = i - gap; j >= 0; j -= gap) {
                count ++;
                if (arr[j] > flagValue) {
                    arr[j + gap]  = arr[j];
                    flag = j;
                }   
            }
            arr[flag] = flagValue;
        }
    }
    return arr;
}

var arr = [];
for (var i = 0; i < 100; i ++) {
    arr.push(parseInt(Math.random() * 100));
}

console.log(shell(arr));
console.log(count);