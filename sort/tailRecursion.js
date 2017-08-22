
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

function add(origin, n) {
    if (n <= 1) return 1;
    return n + add(n -1);
}

function tco(f) {
    var value;
    var active = false;
    var accumulated = [];
  
    return function accumulator() {
      accumulated.push(arguments);
      if (!active) {
        active = true;
        while (accumulated.length) {
          value = f.apply(this, accumulated.shift());
        }
        active = false;
        return value;
      }
    };
  }
  
module.exports = tco;
var add = tco(add);
console.log(add(1, 10));