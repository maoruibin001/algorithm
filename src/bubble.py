def bubble(arr):
    isWrap = 1
    for i in range(len(arr)) :
        for j  in range(len(arr) - i -1) :
            k = arr[j]
            if arr[j] > arr[j + 1] :
                arr[j] = arr[j + 1]
                arr[j + 1] = k
                isWrap = True
        if isWrap == False:
            return arr
    return arr


sortArr = [7,2, 3, 5, 8, 4]
print(bubble(sortArr))