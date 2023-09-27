/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let finalArray = []
    arr.forEach((element, index) => {
        let checkOne = fn(element, index)
        if (checkOne) {
            finalArray.push(element)
        }
    });

    return finalArray;
};

function truthyCheck(n, i) {
    if (n > 10) {
        return true
    }
}

let result = filter([1, 10, 11], truthyCheck)
console.log(result)