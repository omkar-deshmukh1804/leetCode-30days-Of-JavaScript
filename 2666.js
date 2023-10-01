
var once = function (fn) {
    let globalCounter = false;
    return function (...args) {
        if (!globalCounter) { 
            globalCounter = true;
            return fn(...args);

        } else {
            return undefined;
        }
    }

	
};


 let fn = (a,b,c) => (a + b + c)
 let onceFn = once(fn)
 
 console.log(onceFn(1,2,3)); // 6
 console.log(onceFn(2,3,6)) // returns undefined without calling fn
 