
// Promise which produces result
let promise = new Promise((resolve, reject) =>{
    console.log('Inside promise');

    resolve({
        message: 'Here you are: the result of Promise'
    });
});

promise.then(
    result => console.log(`Result: ${result.message || result}`),
    error => console.log(`Error: ${error}`),
    () => console.log('DONE!')
);

// -- Promise which produces an error

let promiseWithError = new Promise((resolve, reject) =>{
    console.log('In promise with error.');

    reject(new Error('Something bad happend'));
});

promiseWithError.then(
    result => console.log(`Result: ${result.message || result}`),
    error => console.log(`Error: ${error}`),
    () => console.log('DONE!')
);