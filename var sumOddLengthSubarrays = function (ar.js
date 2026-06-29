var sumOddLengthSubarrays = function (arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j += 2) {
            for (let k = k <= j; k++) {
                result += arr[k];
            }
        }
    }
    return result;
};
console.log(sumOddLengthSubarrays([1,4,2,5,3])); 