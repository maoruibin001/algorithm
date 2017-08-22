var count = 0;
var getMiddle = require('./getMiddle.js');

function tco(f) {
    let funcStack = [],
        active = false,
        value;
    return function() {
        funcStack.push(arguments);
        if (active) return;
        active = true;
        while (funcStack.length) {
            value = f.apply(this, funcStack.shift());
        }
        active = false;
        return value;
    }
}


function quick(arr) {
   if (arr.length < 2) return arr;
   let middle = getMiddle(arr, 0, parseInt(arr.length / 2), arr.length - 1),
//    let middle = parseInt(arr.length / 2),
         left = [], 
         right = [];
   let middleValue = arr.splice(middle, 1);
   for (let i = 0; i < arr.length; i ++) {
       count ++;
       arr[i] > middleValue[0] ? right.push(arr[i]) : left.push(arr[i]);
   }
   return quick(left).concat(middleValue).concat(quick(right));
}

var arr = [2, 4,5, 1, 3, 6, 9, 4]
var quick2 = tco(quick);
console.log(quick2(arr));
// console.log(count)
