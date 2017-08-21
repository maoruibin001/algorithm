function quick(arr) {
   if (arr.length < 2) return arr;
   let middle = parseInt(arr.length / 2), left = [], right = [];
   let middleValue = arr.splice(middle, 1);
   for (let i = 0; i < arr.length; i ++) {
       arr[i] > middleValue[0] ? right.push(arr[i]) : left.push(arr[i]);
   }
   return quick(left).concat(middleValue).concat(quick(right));
}

var arr = [2, 4,5, 1, 3, 6, 9, 4]

console.log(quick(arr));
