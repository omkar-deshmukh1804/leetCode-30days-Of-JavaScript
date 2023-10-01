

    
var compose = function(functions) {
    if (functions.length === 0) {
    return function(x) { return x; };
    }

    return functions.reduceRight(function (prevFn, nextFn) {
        console.log("previous function", prevFn)
        console.log("next function", nextFn)

        return function (x) {
            console.log(nextFn(prevFn(x)))
        return nextFn(prevFn(x));
    };
    });

};

	

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4)) // 9
