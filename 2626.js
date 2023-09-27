/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    
    let finalValue = init;
    
    nums.forEach(element => {
        finalValue = fn(finalValue, element)
    });
    
    return finalValue;
};
