import Rx from 'rxjs/Rx';

// Rx.Observable.interval(1000)
//     .withLatestFrom(Rx.Observable.interval(500))
//     .take(10)
//     .subscribe(x => console.log(x));

// Rx.Observable.from([1, 2, 3])
//     .withLatestFrom(Rx.Observable.from([4, 3, 2, 1]))
//     .subscribe(x => console.log(x));

// Rx.Observable.from([1, 2, 3])
//     .combineLatest(Rx.Observable.from([4, 3, 2, 1]))
//     .subscribe(x => console.log(x));

Rx.Observable.from([1, 2, 3])
    .combineLatest(Rx.Observable.from([4, 3, 2, 1]), (x, y) => x * y)
    .subscribe(x => console.log(x));