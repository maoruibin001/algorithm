function FiboGenerator(n) {
    let arr = [1, 1];
    if (n <= 0) return [];
    if (n === 1) return [1];
    if (n === 2) return [1, 1];
    for (let i = 2; i < n; i ++) {
        arr[i] = arr[i - 1] + arr[i -2];
    }
    return arr;
}
const MAX_FIBO_LENGTH = 20;
function insert(arr, key) {
    let low = 0, high = arr.length - 1, middle, k = 0;
    let F = FiboGenerator(MAX_FIBO_LENGTH);
    while(high > F[k] - 1) {/*计算high位于斐波那契数列的位置*/
        k ++;
    }
    for (let i = arr.length - 1; i < F[k] - 1; i ++) {//将不满的补全
        arr[i] = arr[arr.length - 1];
    }
    while (low <= high) {
        if (low === high && arr[middle] !== key) return -1;
        middle = low + F[k - 1] - 1;

        if (arr[middle] === key) {
            return middle;
        } else if (arr[middle] < key) {
            low = middle + 1;
            k = k -2;//斐波那契数列下标减2
        } else {
            high = middle - 1;
            k = k - 1; //斐波那契数列下标减1
        }
    }

    return -1;
}   

var arr = [1, 3, 4, 5, 6];

console.log(insert(arr, 2));