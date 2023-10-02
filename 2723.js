// var addTwoPromises = async function (promise1, promise2) {
//     let valueOne = await promise1.then(data => {
//         return data;
//     })

//     let valueTwo = await promise2.then(data => {
//         return data;
//     })

//     return valueOne + valueTwo;
// };

var addTwoPromises = async function (promise1, promise2) {
    const [value1, value2] = await Promise.all([promise1, promise2])

    return value1 + value2;
};


 addTwoPromises(Promise.resolve(2), Promise.resolve(2))
   .then(console.log); // 4
