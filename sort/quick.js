var count = 0;
var getMiddle = require('./getMiddle.js');
console.log(tail)
function quick(arr) {
    console.log(22222);
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
console.log(quick(arr));
console.log(count)
