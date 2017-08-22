function merge(arr) {
    if (arr.length < 2) return arr;

    let middle = parseInt(arr.length / 2);
    let left = arr.slice(0, middle), 
        right = arr.slice(middle);

    
    return mergeify(merge(left), merge(right));
}


function mergeify(left, right) {
    console.log('left: ', left);
    console.log('right: ', right);
    let result = [];
    while(left.length && right.length) {
        if (left[0] > right[0]) {
            result.push(right.shift());
        } else {
            result.push(left.shift());
        }
    }
    while(left.length) {
        result.push(left.shift());
    }
    while(right.length) {
        result.push(right.shift());
    }
    console.log('result: ',result);
    return result;
}


var arr = [91,60,96,13,35, 7,65,46,65];

console.log(merge(arr));