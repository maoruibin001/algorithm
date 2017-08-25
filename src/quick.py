# 快速排序

# 找出基准值，取出基准值，遍历放入

def quick(arr) :
    if len(arr) < 2:
        return arr
    flag = int (len(arr) / 2)
    flagValue = arr.pop(flag)

    leftArr = []
    rightArr = []
    for i in range(len(arr)):
        if arr[i] > flagValue:
            rightArr.append(arr[i])
        else :
            leftArr.append(arr[i])

    return quick(leftArr) + [flagValue]+ (quick(rightArr))


sortArr = [3, 4, 2,5, 1]

print(quick(sortArr))