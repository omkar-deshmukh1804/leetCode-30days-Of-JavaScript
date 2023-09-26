

// Link to the Leet Code problem 🧲
//https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?envType=study-plan-v2&envId=30-days-of-javascript

var map = function (arr, fn) {
    let finalArray = []
    arr.forEach((element, index) => {
        finalArray.push(fn(element, index))
    })
    return finalArray
};

function plusone(n) {
    return n + 1
}

function plusI(n, i) {
    return n + i
}

function constant(n, i) {
    return n
}

let result = map([1, 2, 3], plusone)
let result2 = map([1, 2, 4], plusI)
let result3 = map([1, 2, 4], constant)


console.log(result)
console.log(result2)
console.log(result3)

