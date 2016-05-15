import Rx from 'rxjs/Rx';

// Observable does not create intermediate arrays, which needs gabage collected etc,
Rx.Observable.from([1, 2, 3, 4, 5])
    .filter(x => {
        console.log(`filtering ${x}`);
        return x % 2 === 0;
    }) // filter even numbers
    .map(x => {
        console.log(`mapping ${x}`);
        return `${x}!`;
    })
    .reduce((x, y) => {
        console.log(`reducing ${x}`);
        return x + y;
    })
    .subscribe(x => console.log(x));

// Array high order functions (filter, map, reduce) create intermediate arrays, which needs garbage collected later etc,
// Not good for performance

console.log('--- start processing array ---');

let source = [1, 2, 3, 4, 5]
let result = source
    .filter((x, i, arr) => {
        console.log(`filtering ${x}`);
        console.log(`is source: ${arr === source}`);
        return x % 2 === 0;
    }) // filter even numbers
    .map((x, i, arr) => {
        console.log(`mapping ${x}`);
        console.log(`is source: ${arr === source}`);
        return `${x}!`;
    })
    .reduce((x, y, i, arr) => {
        console.log(`reducing ${x}`);
        console.log(`is source: ${arr === source}`);
        return x + y;
    });

console.log(result);