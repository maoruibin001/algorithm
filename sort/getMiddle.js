let swap = require('./swap.js');
function getMiddle(arr, low, m, high) {
    let middleIndex = m;
    if (arr[low] > arr[high]) {
        swap(arr, low, high);
    }
    if (arr[high] < arr[m]) {
        swap(arr, high, m);
        middleIndex = high;
    }
    if (arr[low] > arr[m]) {
        swap(arr, low, m);
        middleIndex = low;
    }
    return middleIndex;
}

module.exports = getMiddle;
