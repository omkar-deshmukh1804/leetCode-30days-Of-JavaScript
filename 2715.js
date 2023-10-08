var cancellable = function(fn, args, t) {
    fn(...args);
    let timer = setInterval(() => fn(...args), t);

    let cancelFn = () => clearInterval(timer);
    return cancelFn;
};

const fn = function () {
    console.log("Inside function")
}

cancellable(fn, [2], 20 )


//   const result = []

//   const fn = (x) => x * 5
//   const args = [2], t = 20, cancelT = 50

//   const log = (...argsArr) => {
//       result.push(fn(...argsArr))
//   }
       
//   const cancel = cancellable(fn, args, t);
           
//   setTimeout(() => {
//      cancel()
//      console.log(result) // [{"time":20,"returned":10}]
//   }, cancelT)
 