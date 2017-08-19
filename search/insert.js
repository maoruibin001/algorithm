function insert(arr, key) {
    let low = 0, high = arr.length - 1, middle;

    while (low <= high) {
        console.log('low:', low)
        console.log('high:', high)
        if (low === high && arr[middle] !== key) return -1;
        middle = Math.round(low + ((key - arr[low]) / (arr[high] - arr[low])) * (high - low));
        console.log(middle);

        if (arr[middle] === key) {
            return middle;
        } else if (arr[middle] < key) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    return -1;
}

var arr = [1, 3, 4, 5, 6];

console.log(insert(arr, 2));