var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((resolve, reject) => {
            let timerId;

            fn(...args)
                .then(result => {
                    resolve(result);
                })
                .catch(error => {
                    reject(error);
                }).finally(() => {
                    clearTimeout(timerId);
                });

            timerId = setTimeout(() => {
                reject('Time Limit Exceeded');
            }, t);
        });
    };
};