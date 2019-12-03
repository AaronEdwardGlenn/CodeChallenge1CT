
let reverseThisArray = function(arr) {
    let reversedArr = [];
    let index = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr[index] = arr[i];
        index++;
    }
    return reversedArr;
};

console.log(reverseThisArray([1, 3, 4, 5]));
