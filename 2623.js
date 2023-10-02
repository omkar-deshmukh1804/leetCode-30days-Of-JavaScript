
function memoize(fn) {
    
    const cache = {};
   
    return function (...args) {
        const key = JSON.stringify(args)

        if (!cache.hasOwnProperty(key)) {
            cache[key] = fn.apply(this, args)
        }

        return cache[key];

   }
   
 }
 
 
 const memoizedSum = memoize(function(a, b) {
   return a + b;
 });
 
 console.log(memoizedSum(2, 3)); // Output: Computing sum, 5
 console.log(memoizedSum(2, 3)); // Output: 5