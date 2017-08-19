function sentry(arr, key) {
    arr[-1] = key;
    i = arr.length - 1;
    while(arr[i] !== key) {
        i --;
    }
    return i;
}


var arr = [2, 4, 9, 6, 1];

console.log(sentry(arr, 6));