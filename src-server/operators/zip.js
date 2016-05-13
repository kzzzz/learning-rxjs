import Rx from 'rxjs/Rx';

// function arrayZip(array1, array2, selector) {
//     const count = Math.min(array1.length, array2.length);
//
//     const results = [];
//
//     for (let i = 0; i < count; i++) {
//         const combined = selector(array1[i], array2[i]);
//         results.push(combined);
//     }
//
//     return results;
// }
//
// const array1 = [2, 3, 4, 9];
// const array2 = [3, 98, 3, 10, 2];
//
// const zipped = arrayZip(array1, array2, (x, y) => x * y);
//
// console.log(zipped);

Rx.Observable.from([2, 3, 4, 9])
    .zip(Rx.Observable.from([3, 98, 3, 10, 2]), (x, y) => x * y)
    .subscribe(x => console.log(x));