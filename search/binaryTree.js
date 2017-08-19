var binaryObject = {
    value: 3,
    parent: null,
    left: {
        value: 1,
        left: null,
        right: {
            value: 2,
            left: null,
            right: null
        }
    },
    right: {
        value: 7,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 8,
            left: null,
            right: null
        }
    }
}

function print(binaryObject) {
    if (binaryObject.left === null && binaryObject.right === null) {
       return;
    }  else {
        if (binaryObject.left) {
            print(binaryObject.left)
        }
        if (!binaryObject.left && !binaryObject.right) {
            print(binaryObject)
        }
        if (binaryObject.right) {
            print(binaryObject.right);
        }
    }
    console.log(binaryObject);
}
print(binaryObject)


