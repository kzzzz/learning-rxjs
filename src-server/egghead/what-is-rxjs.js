import Rx from 'rxjs/Rx';

var array = [1, 2, 3, 4, 5, 6];

array.filter(x => x % 2 === 1)
    .map(x => `${x}!`)
    .forEach(x => console.log(x));

// Convert an array to an observable,
// It will get many Observable high order functions like zip, merge etc.

Rx.Observable.from(array)
    .filter(x => x % 2 === 1)
    .map(x => `${x}!`)
    .forEach(x => console.log(x));

// Observalbe is async, the source can be infinite
Rx.Observable.interval(1000)
    .filter(x => x % 2 === 1)
    .map(x => `${x}!`)
    .forEach(x => console.log(x));
