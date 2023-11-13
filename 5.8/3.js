let arr = [2,5,1,3,4]

function arrSort(arr){
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - 1; j++){
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

console.log(arrSort(arr))